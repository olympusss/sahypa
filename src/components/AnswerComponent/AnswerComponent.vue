<template>
    <v-app>
        <v-container style="margin-top: 50px; margin-bottom: 100px;">
            <v-row no-gutters class="d-flex justify-center">
                <div class="top-text">Частые вопросы</div>
            </v-row>
            <v-row no-gutters class="d-flex justify-center mt-4">
                <div class="bottom-text">Узнайте ответы на самые популярные вопросы о нашем учебном центре.</div>
            </v-row>
            <v-row no-gutters class="d-flex justify-center mt-8">
                <v-expansion-panels style="max-width: 750px;">
                    <v-expansion-panel
                    v-for="(item,i) in 5"
                    :key="i"
                    >
                    <v-expansion-panel-header :expand-icon="icon" @click="changeIcon(icon)" class="question-header">
                        Is there a free trial available?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Yes, you can try us for free for 30 days. If you want, 
                        we’ll provide you with a free, personalized 30-minute 
                        onboarding call to get you up and running as soon as possible.
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        </v-container>
    </v-app>
</template>

<script src="./AnswerComponent.js"/>

<style scoped src="./AnswerComponent.css"/>