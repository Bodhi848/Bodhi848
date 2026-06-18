import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle,
  PropertyPaneSlider,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'MoSAiPresentationWebPartStrings';
import MoSAiPresentation from './components/MoSAiPresentation';
import { IMoSAiPresentationProps } from './components/IMoSAiPresentationProps';
import { slides } from './data/slides';

export type FitMode = 'contain' | 'width';

export interface IMoSAiPresentationWebPartProps {
  title: string;
  showSpeakerNotes: boolean;
  showAppendix: boolean;
  startSlide: number;
  fitMode: FitMode;
}

export default class MoSAiPresentationWebPart extends BaseClientSideWebPart<IMoSAiPresentationWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMoSAiPresentationProps> = React.createElement(
      MoSAiPresentation,
      {
        title: this.properties.title,
        showSpeakerNotes: this.properties.showSpeakerNotes,
        showAppendix: this.properties.showAppendix,
        startSlide: this.properties.startSlide,
        fitMode: this.properties.fitMode,
        instanceId: this.instanceId
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    // Apply sensible defaults so the web part renders content the moment it is
    // dropped on a page (matches the preconfiguredEntries in the manifest).
    if (this.properties.title === undefined) { this.properties.title = 'AI som stöd i vardagen'; }
    if (this.properties.showSpeakerNotes === undefined) { this.properties.showSpeakerNotes = false; }
    if (this.properties.showAppendix === undefined) { this.properties.showAppendix = false; }
    if (this.properties.startSlide === undefined) { this.properties.startSlide = 0; }
    if (this.properties.fitMode === undefined) { this.properties.fitMode = 'contain'; }
    return Promise.resolve();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    // Upper bound for the start-slide slider depends on how many slides exist.
    const maxStart: number = Math.max(0, slides.length - 1);

    return {
      pages: [
        {
          header: { description: strings.PropertyPaneDescription },
          groups: [
            {
              groupName: strings.ContentGroupName,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.TitleFieldLabel
                })
              ]
            },
            {
              groupName: strings.DisplayGroupName,
              groupFields: [
                PropertyPaneToggle('showSpeakerNotes', {
                  label: strings.ShowSpeakerNotesFieldLabel
                }),
                PropertyPaneToggle('showAppendix', {
                  label: strings.ShowAppendixFieldLabel
                }),
                PropertyPaneSlider('startSlide', {
                  label: strings.StartSlideFieldLabel,
                  min: 0,
                  max: maxStart,
                  step: 1
                }),
                PropertyPaneDropdown('fitMode', {
                  label: strings.FitModeFieldLabel,
                  options: [
                    { key: 'contain', text: strings.FitModeContain },
                    { key: 'width', text: strings.FitModeWidth }
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
