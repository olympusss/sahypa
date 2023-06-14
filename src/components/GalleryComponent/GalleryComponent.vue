<template>
    <v-app>
        <v-container style="margin-top: 60px">
        <div class="top-text">Галерея</div>
    </v-container>
        <v-container class="news-container">      

            <div class="slide-track">

            <div class="slide">
                <v-card
                    v-for="item in 100"
                    :key="item"
                    class="news-card-style mx-4"
                    elevation="0"
                >
                <v-img
                    src="@/assets/picture3.svg"
                ></v-img>
                </v-card>
            </div>

            </div>

        </v-container>
    </v-app>
</template>

<script src="./GalleryComponent.js"/>

<style scoped src="./GalleryComponent.css"/>