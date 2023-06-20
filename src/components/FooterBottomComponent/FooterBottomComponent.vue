<template>
    <v-app>
        <v-container style="margin-top: 50px; margin-bottom: 100px">
        <v-row no-gutters>
            <v-col cols="12" xs="6" md="4" sm="12" style="margin-top: 50px;">
                <div class="text">Наши контакты</div>
            </v-col>
            <v-col cols="12" xs="6" md="4" sm="12" style="margin-top: 50px;">
                <v-row no-gutters class="d-flex align-center">
                    <v-icon class="mr-2">email</v-icon>
                    <div class="text">info@sahypa.edu.tm</div>
                </v-row>
                <v-row no-gutters class="mt-4 d-flex align-center">
                    <v-icon class="mr-2">photo_camera</v-icon>
                    <div class="text">@sahypa.educentre</div>
                </v-row>
                <v-row no-gutters class="mt-4 d-flex align-center">
                    <v-icon class="mr-2">place</v-icon>
                    <div class="text">Watan street 4, Aneu, Turkmenistan</div>
                </v-row>
            </v-col>
            <v-col cols="12" xs="6" md="4" sm="12" style="margin-top: 50px;">
                <v-row no-gutters class="d-flex align-center">
                    <v-icon class="mr-2">phone</v-icon>
                    <div class="text">+993 137 33 75 5</div>
                </v-row>
                <v-row no-gutters class="mt-4 d-flex align-center">
                    <v-icon class="mr-2">phone</v-icon>
                    <div class="text">+993 12 57 43 55</div>
                </v-row>
                <v-row no-gutters class="mt-4 d-flex align-center">
                    <v-icon class="mr-2">phone</v-icon>
                    <div class="text">+993 62 61 00 61</div>
                </v-row>
            </v-col>
        </v-row>
        </v-container>
        <v-footer padless style="background-color: #6CCAB1;">
            <v-col
                class="text-center"
                cols="12"
                style="font-size: 14px;line-height: 14px;font-weight: 400;"
            >
                Copyright all rights is reserved Sahypa education {{ new Date().getFullYear() }}
            </v-col>
        </v-footer>
    </v-app>
</template>

<script src="./FooterBottomComponent.js"/>

<style scoped src="./FooterBottomComponent.css"/>