import Vue from 'vue'
import VueMdijs from 'vue-mdijs'

import { 
  mdiFileTree,
  mdiLoading,
  mdiCogOutline,
  mdiAccountOutline,
  mdiFolderEditOutline,
  mdiChevronUp,
  mdiChevronDown,
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatStrikethroughVariant,
  mdiInformationOutline,
  mdiCalendarCheckOutline,
  mdiInvertColors,
  mdiFormatText,
  mdiFormatListChecks,
  mdiShapeOutline,
  mdiPowerPlugOutline,
  mdiCloseBoxOutline,
  mdiShapeRectanglePlus,
  mdiLogoutVariant,
  mdiEmailOutline,
  mdiFingerprint
} from '@mdi/js'
 
VueMdijs.add({ 
  mdiFileTree,
  mdiLoading,
  mdiCogOutline,
  mdiAccountOutline,
  mdiFolderEditOutline,
  mdiChevronUp,
  mdiChevronDown,
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatStrikethroughVariant,
  mdiInformationOutline,
  mdiCalendarCheckOutline,
  mdiInvertColors,
  mdiFormatText,
  mdiFormatListChecks,
  mdiShapeOutline,
  mdiPowerPlugOutline,
  mdiCloseBoxOutline,
  mdiShapeRectanglePlus,
  mdiLogoutVariant,
  mdiEmailOutline,
  mdiFingerprint
})

Vue.use(VueMdijs)