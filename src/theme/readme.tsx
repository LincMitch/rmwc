import React from 'react';

import { Docs, DocsExample, DocProps, DocsP, DocsSubtitle } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';

import { Theme, ThemeProvider } from '.';
import { Button } from '../button';
import { Radio } from '../radio';
import { Checkbox } from '../checkbox';
import { Toolbar, ToolbarRow } from '../toolbar';
import { Tab, TabBar } from '../tabs';

export default function() {
  return (
    <Docs
      title="Theming"
      lead="MDC Theme is a foundational module that themes MDC Web components."
      module="@rmwc/theme"
      styles={['@material/theme/dist/mdc.theme.css']}
      docsLink="https://material.io/develop/web/components/theme/"
      examples={examples}
    >
      <DocsSubtitle>Theme Options</DocsSubtitle>
      <DocsP>
        **Important** You should include the theme style sheet BEFORE any of
        your other styles.
      </DocsP>

      <DocsExample>
        <>
          <div style={{ backgroundColor: '#ddd' }}>
            {[
              'primary',
              'secondary',
              'error',
              'background',
              'surface',
              'primaryBg',
              'secondaryBg',
              'textPrimaryOnBackground',
              'textSecondaryOnBackground',
              'textHintOnBackground',
              'textDisabledOnBackground',
              'textIconOnBackground',
              'textPrimaryOnLight',
              'textSecondaryOnLight',
              'textHintOnLight',
              'textDisabledOnLight',
              'textIconOnLight'
            ].map((theme, i) => (
              // @ts-ignore
              <Theme use={theme} key={i}>
                {theme}
              </Theme>
            ))}
          </div>
          <div style={{ backgroundColor: '#333' }}>
            {[
              'onPrimary',
              'onSecondary',
              'onError',
              'textPrimaryOnDark',
              'textSecondaryOnDark',
              'textHintOnDark',
              'textDisabledOnDark',
              'textIconOnDark'
            ].map((theme, i) => (
              // @ts-ignore
              <Theme use={theme} key={i}>
                {theme}
              </Theme>
            ))}
          </div>
        </>
      </DocsExample>

      <DocsSubtitle>ThemeProvider</DocsSubtitle>
      <DocsP>
        The `ThemeProvider` is an optional component that allows you to specify
        theme colors and settings for all of its subtree. This is useful to use
        once at the top of your app, or in parts of your app where the styles or
        color scheme differ.
      </DocsP>
      <DocsP>
        You don't have to pass in all options. The `ThemeProvider` will
        automatically adjust some of the values like `onSurface` white or black
        text depending on colors contrast ratio.
      </DocsP>
      <DocsP>
        Theming in `material-components-web` isn't perfect, but a few basic
        options will get you most of the way. Try using the ThemePicker at the
        top and selecting "Shrine". You'll see that most things are colored
        appropriately, but the defaults provided for things like Buttons and
        tabs still have to have their colors overridden.
      </DocsP>

      <DocsExample label="Defaults">
        <>
          <Button raised>Cookies</Button>
          <Checkbox label="Pizza" defaultChecked />
          <Radio label="Icecream" defaultChecked />
        </>
      </DocsExample>

      <DocsExample label="With Provider">
        <ThemeProvider
          options={{
            primary: 'red',
            secondary: 'blue'
          }}
        >
          <Button raised>Cookies</Button>
          <Checkbox label="Pizza" defaultChecked />
          <Radio label="Icecream" defaultChecked />
        </ThemeProvider>
      </DocsExample>

      <DocsExample label="More Options">
        <ThemeProvider
          options={{
            primary: 'lightpink',
            secondary: 'black',
            onPrimary: '#000',
            textPrimaryOnBackground: 'black'
          }}
        >
          <Button raised>Cookies</Button>
          <Checkbox label="Pizza" defaultChecked />
          <Radio label="Icecream" defaultChecked />
        </ThemeProvider>
      </DocsExample>

      <DocsSubtitle>Using the ThemeProvider to fix broken styles</DocsSubtitle>
      <DocsP>
        As stated above, theming in `material-components-web` isn't perfect, but
        the ThemeProvider can be used to conveniently fix some of the built in
        style issues. For instance, the Tab bar doesn't respond correctly when
        used in the TopAppBar or on any other dark color surface.
      </DocsP>
      <DocsExample label="Broken Styles">
        <Toolbar>
          {/* Broken Tab Bar styles when used in Toolbar / TopAppBar */}
          <ToolbarRow>
            <TabBar>
              <Tab>Cookies</Tab>
              <Tab>Pizza</Tab>
              <Tab>Icecream</Tab>
            </TabBar>
          </ToolbarRow>
        </Toolbar>
      </DocsExample>

      <DocsExample label="Fixed Styles">
        <Toolbar>
          {/* Fixed using ThemeProvider. Use "wrap" to not screw up layout with an extra div. */}
          <ToolbarRow>
            <ThemeProvider
              options={{ primary: 'white', onSurface: 'white' }}
              wrap
            >
              <TabBar>
                <Tab>Cookies</Tab>
                <Tab>Pizza</Tab>
                <Tab>Icecream</Tab>
              </TabBar>
            </ThemeProvider>
          </ToolbarRow>
        </Toolbar>
      </DocsExample>

      <DocsSubtitle>Theme Component</DocsSubtitle>
      <DocsP>
        The Theme component allows you to apply theme colors to RMWC components,
        or components of your own. Almost every component in RMWC has a `theme`
        prop that you can use that takes the same options as the `Theme`
        component's `use` prop.
      </DocsP>
      <DocsExample label="Custom">
        <Theme use={['primaryBg', 'onPrimary']} wrap>
          {/* Add Theme colors to your own components. */}
          <div style={{ width: '4rem', height: '4rem', padding: '1rem' }}>
            Cookies
          </div>
        </Theme>
      </DocsExample>
      <DocsExample label="Theme Prop">
        <>
          {/* These two examples are roughly equivalent. */}
          <Theme use={['secondaryBg', 'onSecondary']} wrap>
            <Button>Pizza</Button>
          </Theme>

          <Button theme={['secondaryBg', 'onSecondary']}>Pizza</Button>
        </>
      </DocsExample>
      <DocsExample label="Typography">
        <>
          {/* Text is one of the cases where `wrap` is not required. By default `Theme` will insert `span` tags. */}
          <h3>
            I <Theme use="primary">Want</Theme>{' '}
            <Theme use="secondary">Icecream</Theme>
          </h3>
        </>
      </DocsExample>

      <DocProps src={propsSrc} components={[ThemeProvider, Theme]} />
    </Docs>
  );
}
