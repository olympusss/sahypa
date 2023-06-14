<template>
    <v-card
        elevation="0"
        width="100%"
        color="#A3A8D2"
        tile
    >
        <v-row no-gutters>
            <v-col cols="12" md="6" sm="12">
                <div class="comment-div">
                    <v-card
                        width="100%"
                        color="#FFFFFF"
                        elevation="0"
                        style="padding: 40px;"
                        tile
                    >
                        <v-row no-gutters>
                            <v-rating
                                color="#A3A8D2"
                                empty-icon="star"
                                hover
                                length="5"
                                readonly
                                size="20"
                                value="15"
                                />
                        </v-row>
                        <v-card-title class="comment-text pa-0">
                            Lorem ipsum dolor sit amet consectetur. A scelerisque ornare 
                            ultrices facilisis risus mauris diam pellentesque eros. Mattis 
                            sollicitudin purus quis malesuada nisi eget.
                        </v-card-title>
                        <v-card-title class="comment-person-name pa-0">Amanow Aman</v-card-title>
                        <v-card-title class="comment-company-name pa-0">Maksatly Yollar H.K</v-card-title>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="12" md="6" sm="12">
                <div class="comment-toggle-div">
                    <div class="comment-toggle-top-text">Наши отзывы</div>
                    <div class="comment-toggle-bottom-text">Что о нас говорят наши студенты!</div>
                <v-row no-gutters style="margin-top: 80px">
                    <v-btn-toggle
                        v-model="text"
                        tile
                        color="black"
                        group
                        class="pa-0"
                    >
                        <v-btn value="left" outlined>
                            <v-icon size="28">keyboard_backspace</v-icon>
                        </v-btn>

                        <v-btn value="right" outlined>
                            <v-icon size="25">east</v-icon>
                        </v-btn>
                    </v-btn-toggle>
                </v-row>
            </div>

            </v-col>
        </v-row>
    </v-card>
</template>

<script src="./CommentComponent.js"/>

<style scoped src="./CommentComponent.css"/>