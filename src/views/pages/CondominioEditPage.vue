<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
            <div class="text-h6">Condominio Recanto Verde</div>
        </q-card-section>

        <q-card-section>
            <div class="text-h9">Condominio Recanto Verde</div>
        </q-card-section>

        <q-card-section>
            <q-btn-group spread>
                <q-btn glossy color="brand-2" label="Espaços" icon="meeting_room" />
                <q-btn glossy color="brand-2" label="Unidades" icon="domain" />
                <q-btn glossy color="brand-2" label="Moradores" icon="people" />
                <q-btn glossy color="brand-2" label="Área Comum" icon="layers" />
            </q-btn-group>
        </q-card-section>

        <q-card-actions>
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
        </q-card-actions>

    </q-card>   
  </div>

</template>
<style lang="stylus" scoped>
.my-card
  width 80%
  height 100px

</style>