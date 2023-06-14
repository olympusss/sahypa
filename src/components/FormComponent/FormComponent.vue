<template>
  <v-app>
    <v-conteiner fluid>
      <v-card
        width="100%"
        min-height="465"
        color="#F2D140"
        elevation="0"
        tile
      >
        <v-row no-gutters>
          <v-col cols="12" md="6" sm="12" >
            <div class="form-left-padding">
              <v-card-title class="form-left-top-text pa-0">Не знаете что вам подойдет?</v-card-title>
              <v-card-title class="form-left-bottom-text pa-0">Наши специалисты готовы вам помочь</v-card-title>
            </div>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <div class="form-right-padding">
              <v-card-title class="form-right-top-text pa-0">Оставьте свои данные и наши менеджеры свяжутся с вами!</v-card-title>
              <div class="input-div">
                <input type="text" class="input" placeholder="Имя и фамилия">
              </div>
              <div class="input-div">
                <input type="text" class="input" placeholder="Номер телефона или e-mail">
              </div>
              <v-btn 
                tile
                width="100%"
                height="50"
                color="black"
                style="color: white; margin-top: 10px"
              >
                Оставить заявку
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-conteiner>
  </v-app>
</template>

<script src="./FormComponent.js"/>

<style scoped src="./FormComponent.css"/>