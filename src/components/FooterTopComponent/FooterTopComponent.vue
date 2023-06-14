<template>
    <v-app>
        <v-card
            tile
            width="100%"
            color="#A3A8D2"
            elevation="0"
        >
            <v-row no-gutters>
                <v-col cols="12" md="6" sm="12">
                    <div class="left-div">
                        <div class="left-text">Подпишитесь на рассылку что бы не пропустить интересное</div>
                    </div>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <div class="right-div">
                        <div class="input-div">
                            <input type="text" class="input" placeholder="Email">
                        </div>
                        <v-btn 
                            tile
                            width="100%"
                            height="50"
                            color="black"
                            style="color: white; margin-top: 10px"
                        >
                            Подписаться
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </v-app>
</template>

<script src="./FooterTopComponent.js"/>

<style scoped src="./FooterTopComponent.css"/>