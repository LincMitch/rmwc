import React from 'react';
import { CircularProgress } from '@rmwc/circular-progress';
import { DocsMarkdown } from '../../doc-utils';

import InstallationMD from './README-INSTALLATION.md';
import UsageMD from './README-USAGE.md';
import StylingMD from './README-STYLING-THEMING.md';
import MethodologyMD from './README-METHODOLOGY.md';
import LibraryIntegrationsMD from './README-LIBRARY-INTEGRATIONS.md';
import TypesMD from './README-TYPES.md';

const InstallationDocs = () => <DocsMarkdown fileSrc={InstallationMD} />;
const UsageDocs = () => <DocsMarkdown fileSrc={UsageMD} />;
const StylingThemingDocs = () => <DocsMarkdown fileSrc={StylingMD} />;
const MethodologyDocs = () => <DocsMarkdown fileSrc={MethodologyMD} />;
const LibraryIntegrationsDocs = () => (
  <DocsMarkdown fileSrc={LibraryIntegrationsMD} />
);
const TypeDocs = () => <DocsMarkdown fileSrc={TypesMD} />;

const ResourcesDocs = React.lazy(() => import('./resources'));

const AvatarDocs = React.lazy(() => import('@rmwc/avatar/readme'));
const ButtonDocs = React.lazy(() => import('@rmwc/button/readme'));
const FabDocs = React.lazy(() => import('@rmwc/fab/readme'));
const IconButtonDocs = React.lazy(() => import('@rmwc/icon-button/readme'));
const CardDocs = React.lazy(() => import('@rmwc/card/readme'));
const ChipDocs = React.lazy(() => import('@rmwc/chip/readme'));
const DataTableDocs = React.lazy(() => import('@rmwc/data-table/readme'));
const DialogDocs = React.lazy(() => import('@rmwc/dialog/readme'));
const DrawerDocs = React.lazy(() => import('@rmwc/drawer/readme'));
const ElevationDocs = React.lazy(() => import('@rmwc/elevation/readme'));
const GridListDocs = React.lazy(() => import('@rmwc/grid-list/readme'));
const ImageListDocs = React.lazy(() => import('@rmwc/image-list/readme'));
const CheckboxDocs = React.lazy(() => import('@rmwc/checkbox/readme'));
const FormfieldDocs = React.lazy(() => import('@rmwc/formfield/readme'));
const RadioDocs = React.lazy(() => import('@rmwc/radio/readme'));
const SelectDocs = React.lazy(() => import('@rmwc/select/readme'));
const SliderDocs = React.lazy(() => import('@rmwc/slider/readme'));
const SwitchDocs = React.lazy(() => import('@rmwc/switch/readme'));
const TextfieldDocs = React.lazy(() => import('@rmwc/textfield/readme'));
const GridDocs = React.lazy(() => import('@rmwc/grid/readme'));
const LinearProgressDocs = React.lazy(() =>
  import('@rmwc/linear-progress/readme')
);
const CircularProgressDocsDocs = React.lazy(() =>
  import('@rmwc/circular-progress/readme')
);
const ListDocs = React.lazy(() => import('@rmwc/list/readme'));
const ListCollapsibleDocs = React.lazy(() =>
  import('@rmwc/list/readme-collapsible')
);
const ListVariantsDocs = React.lazy(() => import('@rmwc/list/readme-variants'));
const MenuDocs = React.lazy(() => import('@rmwc/menu/readme'));
const RippleDocs = React.lazy(() => import('@rmwc/ripple/readme'));
const SnackbarDocs = React.lazy(() => import('@rmwc/snackbar/readme'));
const TabsDocs = React.lazy(() => import('@rmwc/tabs/readme'));
const ThemeDocs = React.lazy(() => import('@rmwc/theme/readme'));
const ToolbarDocs = React.lazy(() => import('@rmwc/toolbar/readme'));
const TopAppBarDocs = React.lazy(() => import('@rmwc/top-app-bar/readme'));
const TypographyDocs = React.lazy(() => import('@rmwc/typography/readme'));
const IconDocs = React.lazy(() => import('@rmwc/icon/readme'));
const ProviderDocs = React.lazy(() => import('@rmwc/provider/readme'));

const Loading = () => (
  <div
    style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      boxSizing: 'border-box'
    }}
  >
    <CircularProgress size="xlarge" />
  </div>
);

const Loadable = (Component: any) => () => (
  <React.Suspense fallback={<Loading />}>
    <Component />
  </React.Suspense>
);

export const menuContent = [
  {
    label: 'Getting Started',
    options: [
      {
        label: 'Installation',
        url: `/installation`,
        component: Loadable(InstallationDocs)
      },
      {
        label: 'Resources',
        url: `/resources`,
        component: Loadable(ResourcesDocs)
      },
      {
        label: 'Usage',
        url: `/usage`,
        component: Loadable(UsageDocs)
      },
      {
        label: 'Styling and Theming',
        url: `/styling-theming`,
        component: Loadable(StylingThemingDocs)
      },
      {
        label: 'Project Methodology',
        url: `/methodology`,
        component: Loadable(MethodologyDocs)
      },
      {
        label: 'Type System',
        url: `/type-system`,
        component: Loadable(TypeDocs)
      },
      {
        label: 'Library Integrations',
        url: `/library-integrations`,
        component: Loadable(LibraryIntegrationsDocs)
      }
    ]
  },
  {
    label: 'Avatars',
    url: `/avatars`,
    component: Loadable(AvatarDocs)
  },
  {
    label: 'Buttons',
    options: [
      {
        label: 'Buttons',
        url: `/buttons`,
        component: Loadable(ButtonDocs)
      },
      {
        label: 'Fabs',
        url: `/fabs`,
        component: Loadable(FabDocs)
      },
      {
        label: 'Icon Buttons',
        url: `/icon-buttons`,
        component: Loadable(IconButtonDocs)
      }
    ]
  },
  {
    label: 'Cards',
    url: `/cards`,
    component: Loadable(CardDocs)
  },
  {
    label: 'Chips',
    url: `/chips`,
    component: Loadable(ChipDocs)
  },
  {
    label: 'Data Tables',
    url: `/data-tables`,
    component: Loadable(DataTableDocs)
  },
  {
    label: 'Dialogs',
    url: `/dialogs`,
    component: Loadable(DialogDocs)
  },
  {
    label: 'Drawers',
    url: `/drawers`,
    component: Loadable(DrawerDocs)
  },
  {
    label: 'Elevation',
    url: `/elevation`,
    component: Loadable(ElevationDocs)
  },
  {
    label: 'Grid Lists',
    url: `/grid-lists`,
    component: Loadable(GridListDocs)
  },
  {
    label: 'Image Lists',
    url: `/image-lists`,
    component: Loadable(ImageListDocs)
  },
  {
    label: 'Inputs and Controls',
    options: [
      {
        label: 'Checkboxes',
        url: `/checkboxes`,
        component: Loadable(CheckboxDocs)
      },
      {
        label: 'FormFields',
        url: `/formfields`,
        component: Loadable(FormfieldDocs)
      },
      {
        label: 'Radio Buttons',
        url: `/radio-buttons`,
        component: Loadable(RadioDocs)
      },
      {
        label: 'Select Menus',
        url: `/select-menus`,
        component: Loadable(SelectDocs)
      },
      {
        label: 'Sliders',
        url: `/sliders`,
        component: Loadable(SliderDocs)
      },
      {
        label: 'Switches',
        url: `/switches`,
        component: Loadable(SwitchDocs)
      },
      {
        label: 'Text Fields',
        url: `/text-fields`,
        component: Loadable(TextfieldDocs)
      }
    ]
  },
  {
    label: 'Layout Grid',
    url: `/layout-grid`,
    component: Loadable(GridDocs)
  },
  {
    label: 'Progress',
    options: [
      {
        label: 'Linear Progress',
        url: `/linear-progress`,
        component: Loadable(LinearProgressDocs)
      },
      {
        label: 'Circular Progress',
        url: `/circular-progress`,
        component: Loadable(CircularProgressDocsDocs)
      }
    ]
  },
  {
    label: 'Lists',
    options: [
      {
        label: 'Standard Lists',
        url: `/lists`,
        component: Loadable(ListDocs)
      },
      {
        label: 'Collapsible',
        url: `/lists-collapsible`,
        component: Loadable(ListCollapsibleDocs)
      },
      {
        label: 'Variants',
        url: `/lists-variants`,
        component: Loadable(ListVariantsDocs)
      }
    ]
  },
  {
    label: 'Menus',
    url: `/menus`,
    component: Loadable(MenuDocs)
  },
  {
    label: 'Ripples',
    url: `/ripples`,
    component: Loadable(RippleDocs)
  },

  {
    label: 'Snackbars',
    url: `/snackbars`,
    component: Loadable(SnackbarDocs)
  },
  {
    label: 'Tabs',
    url: `/tabs`,
    component: Loadable(TabsDocs)
  },
  {
    label: 'Theme',
    url: `/theme`,
    component: Loadable(ThemeDocs)
  },
  {
    label: 'Toolbars',
    url: `/toolbars`,
    component: Loadable(ToolbarDocs)
  },
  {
    label: 'Top App Bar',
    url: `/top-app-bar`,
    component: Loadable(TopAppBarDocs)
  },

  {
    label: 'Typography',
    url: `/typography`,
    component: Loadable(TypographyDocs)
  },
  {
    label: 'Icons',
    url: `/icons`,
    component: Loadable(IconDocs)
  },
  {
    label: 'Provider',
    url: `/provider`,
    component: Loadable(ProviderDocs)
  }
];
