// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { RouterLinkStub } from '@vue/test-utils'
import { mount } from '@cypress/vue'

Vue.use(Vuetify)

// eslint-disable-next-line no-undef
Cypress.Commands.add(
  'mount',
  (MountedComponent, { mountOptions = {}, vuetifyOptions = {} } = {}) => {
    const root = document.getElementById('__cy_root')
    // Vuetify styling
    if (!root.classList.contains('v-application')) {
      root.classList.add('v-application')
    }

    const vuetify = new Vuetify(vuetifyOptions)

    return mount(MountedComponent, {
      vuetify,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
      ...mountOptions, // To override values for specific tests
    })
  }
)
