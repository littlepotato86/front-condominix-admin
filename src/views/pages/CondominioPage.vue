<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      animated
      active-color="brand-1"
    >
      <q-step :name="1" prefix="1" title="Dados do Condomínio">
        <div class="q-pa-md" style="max-width: 400px">
          <q-form class="q-gutter-md">
            <q-input outlined v-model="model.nome" label="Nome do Condomínio" :dense="dense" />
            <q-input outlined v-model="model.docNumber" label="CNPJ" :dense="dense" />
            <q-input outlined v-model="model.celular" label="Celular" :dense="dense" />
            <q-input outlined v-model="model.telefone" label="Telefone" :dense="dense" />
            <q-input outlined v-model="model.email" label="E-mail" :dense="dense" />
            <q-input outlined v-model="model.observacao" label="Observação" :dense="dense" type="textarea" />
            <q-field outlined label="Data Cadastro" v-model="model.dataCadastro" stack-label>
              <template v-slot:control>
                <div class="self-center full-width no-outline" tabindex="0">{{dataCadastro}}</div>
              </template>
            </q-field>
          </q-form>
        </div>
      </q-step>

      <q-step :name="2" prefix="2" title="Comercial">
         <div class="q-pa-md" style="max-width: 400px">
          <q-form class="q-gutter-md">
            <q-input outlined v-model="model.nomeFantasia" label="Nome Fantasia" :dense="dense" />
            <q-input outlined v-model="model.inscricaoEstadual" label="Inscr. Estadual" :dense="dense" />
            <q-input outlined v-model="model.site" label="site" :dense="dense" />
          </q-form>
        </div>
      </q-step>

      <q-step :name="3" prefix="3" title="Endereço" >
       <div class="q-pa-md" style="max-width: 400px">
          <q-form class="q-gutter-md">
            <q-input outlined bottom-slots v-model="model.cep" label="CEP" counter maxlength="8" :dense="dense">
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
            </q-input>    
            <q-input outlined v-model="model.endereco" label="Endereço" :dense="dense" />
            <q-input outlined v-model="model.numero" label="Número" :dense="dense" />
            <q-input outlined v-model="model.complemento" label="Complemento" :dense="dense" />
            <q-input outlined v-model="model.bairro" label="Bairro" :dense="dense" />
            <q-input outlined v-model="model.cidade" label="Cidade" :dense="dense" />
            <q-select outlined v-model="model.uf" label="UF" :dense="dense" :options="ufList" />
            
            
          </q-form>
        </div>
      </q-step>

      <q-step
        :name="4"
        prefix="4"
        title="Revisão"
      >
        {{model}}
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn v-if="step > 1" flat color="brand-2" @click="$refs.stepper.previous()" label="Voltar" class="q-ml-sm" />
          <q-btn v-if="step <= 3" @click="$refs.stepper.next()" color="brand-2" label="Próximo" />
          <q-btn v-if="step === 4" color="brand-2" @click="save" label="Salvar" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>
<script>
import api from '@/api/CondominioServices'
//import { date } from 'quasar'

export default {
  data () {
    return {
      step: 1,
      model: {dataCadastro: Date.now()},
      dataCadastro: Date.now(),
      ufList: [
        'SP - São Paulo', 'PR - Paraná', 'SC - Santa Catarina', 'RS - Rio Grande do Sul'
      ],
      dense: true
    }
  },
  methods: {
    async save() {
        console.log(this.model)
      await api.createCondominio(this.model)
      this.model = {} // reset form
      //await this.refresh()
    },
  }
}
</script>