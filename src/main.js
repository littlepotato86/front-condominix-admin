import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/quasar.styl'
import './styles/condominix.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QTable,
  QTh,
  QTr,
  QTd,
  QStepper,
  QStep,
  QStepperNavigation,
  QInput,
  QSelect,
  QField,
  QCard,
  QCardSection,
  QCardActions,
  QSeparator,
  QBtnGroup,
  QBtnDropdown,
  QAvatar,
  QChip,
  QBadge,
  QToggle,
  QMenu
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QTable,
    QTh,
    QTr,
    QTd,
    QStepper,
    QStep,
    QStepperNavigation,
    QInput,
    QSelect,
    QField,
    QCard,
    QCardSection,
    QCardActions,
    QSeparator,
    QBtnGroup,
    QBtnDropdown,
    QAvatar,
    QChip,
    QBadge,
    QToggle,
    QMenu
  },
  directives: {
  },
  plugins: {
  }
 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
