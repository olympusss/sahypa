<template>
  <v-app>

    <!-- Our history -->
    <v-row no-gutters style="margin-top: 100px;">
      <v-col cols="12" md="8" sm="12">
        <v-img src="@/assets/picture2.svg"/>
      </v-col>
      <v-col cols="12" md="4" sm="12" style="padding: 40px;">
        <div class="history-title">Наша история</div>
        <div class="history-content mt-3">
          Наш учебный центр был основан в 2023 году и на 
          данный момент находится в Аннау и оборудован передовыми 
          технологиями для комфортного обучение детей и взрослых.
        </div>
        <div class="history-content mt-8">
          Обучение ведется по специальной программе, разработанной 
          Оксвордским университетом (Oxford University Press), 
          являющейся одной из лучших.
        </div>
      </v-col>
    </v-row>

    <!-- Our lessons -->
    <v-container style="margin-top: 100px; margin-bottom: 100px;">
      <v-row no-gutters>
        <v-col cols="12" md="2" sm="12" style="padding-right: 20px !important;">
          <div style="font-size: 24px;font-weight: 700;">Наши курсы</div>
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="selectedItem"
              color="white"
              class="lessons-style"
            >
              <v-list-item
                v-for="(item, i) in lessonCategory"
                :key="i"
                class="lesson-item mt-3"
                active-class="black"
                :ripple="false"
                width="auto"
              >
                {{ item.title }}
              </v-list-item>
            </v-list-item-group>
          </v-list>  
        </v-col>
        <v-col cols="12" md="5" sm="12" style="padding: 10px 25px 15px 25px;">
          <v-card
            elevation="0"
            color="#6CCAB1"
            style="padding: 25px;"
            width="450"
            height="250"
            v-for="i in 4"
            :key="i"
            tile
            :class="i == 1 ? 'mt-0' : 'mt-8'"
          >
            <v-card-title class="pa-0 lesson-card-title">Английский язык</v-card-title>
            <div
              v-for="item in lessonTinyEnglish"
              :key="item"
              class="d-flex align-center"
              style="cursor: pointer;"
            >
              <div style="width: 5px;height: 5px;background-color: white;border-radius: 100%;" class="mr-2"></div>
              <v-card-title class="pa-0 lesson-card-tiny">{{ item.title }}</v-card-title>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="5" sm="12" style="padding: 10px 25px 15px 25px;">
          <v-card
            elevation="0"
            color="#A3A8D2"
            style="padding: 25px;"
            width="450"
            height="250"
            v-for="i in 4"
            :key="i"
            tile
            :class="i == 1 ? 'mt-0' : 'mt-8'"
          >
            <v-card-title class="pa-0 lesson-card-title">Компьютерная грамотность</v-card-title>
            <div
              v-for="item in lessonTinyComputer"
              :key="item"
              class="d-flex align-center"
              style="cursor: pointer;"
            >
              <div style="width: 5px;height: 5px;background-color: white;border-radius: 100%;" class="mr-2"></div>
              <v-card-title class="pa-0 lesson-card-tiny">{{ item.title }}</v-card-title>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <FormComponent />
    <GalleryComponent />
    <CommentComponent />
    <AnswerComponent />
    <FooterTopComponent />
    <FooterBottomComponent />
  </v-app>
</template>

<script src="./HomePage.js"/>

<style scoped src="./HomePage.css"/>
