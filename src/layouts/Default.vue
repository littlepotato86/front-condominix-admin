<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="flat">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="drawer = !drawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Condominix
        </q-toolbar-title>

        <div>
        
          <q-btn flat color="white" round icon="email" class="q-ml-md">
           <q-badge color="brand-2" floating>4</q-badge>
           <q-menu transition-show="flip-right" transition-hide="flip-left" >
            <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Having fun</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Crazy for transitions</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Mind blown</q-item-section>
            </q-item>
          </q-list>
           </q-menu>

          </q-btn>    
          <q-btn flat color="white" round icon="notifications" class="q-ml-md">
           <q-badge color="brand-2" floating>50</q-badge>
          </q-btn>   
          <q-btn-dropdown
              color="white"
              push
              no-caps
              flat
              stretch
            >
              <template v-slot:label>
                <div class="row items-center no-wrap">
                  <q-icon left name="location_city" />
                  <div class="text-center">
                    Veredas do Bosque 
                  </div>
                </div>
              </template>
               <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">Erick Rocha</div>

          <q-btn
            color="primary"
            label="Logout"
            push
            size="sm"
            v-close-popup
          />
        </div>
      </div>
           </q-btn-dropdown>

        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        show-if-above
        content-style="background-color: #AB987A"
    >
      <q-list >
        <q-item-label class="text-white" header>Navegação</q-item-label>
        <q-item to="/" exact active-class="my-menu-link" class="my-item-menu">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item >


        <q-item to="/meu-condominio" exact active-class="my-menu-link" class="my-item-menu">
          <q-item-section avatar>
            <q-icon name="business" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Meu Condominio</q-item-label>
          </q-item-section>
        </q-item>

        

        <q-item to="/room" exact active-class="my-menu-link" class="my-item-menu">
          <q-item-section avatar>
            <q-icon name="meeting_room" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Espaços</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/condominio" exact active-class="my-menu-link" class="my-item-menu">
          <q-item-section avatar>
            <q-icon name="bookmark" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Condominio</q-item-label>
          </q-item-section>
        </q-item>


        <q-item-label class="text-white" header>Administração</q-item-label>
        <q-item to="/dashboard" exact active-class="my-menu-link">
          <q-item-section class="my-item-menu" avatar>
            <q-icon name="assessment" />
          </q-item-section>
          <q-item-section class="my-item-menu">
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        
        <q-item to="/about" exact active-class="my-menu-link" class="my-item-menu">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',

  data () {
    return {
      drawer: true,
      miniState: true
    }
  }
}
</script>

<style lang="stylus">
.my-menu-link
  color #000000 !important
  background #FF533D

.my-item-menu
  color #F5F5F5 !important
</style>