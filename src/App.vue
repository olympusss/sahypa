<template>
  <v-app>
    <v-navigation-drawer 
      app 
      temporary
      v-model="drawer"
      right
      >
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            color="primary"
            v-for="link in links"
            :key="link.title"
            :to="link.url"
          >
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    <v-sheet color="#F2D140" height="723">
      <v-app-bar color="#F2D140" height="105" app elevation="0">
        <v-container class="d-flex align-center">
          <router-link to="/">
            <v-img src="@/assets/logo.svg" height="45" width="155"/>
          </router-link>
        <v-spacer/>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="hidden-md-and-up"
        />
        <div class="main-nav-items hidden-sm-and-down">
          <div 
            class="main-nav-item"
            v-for="item in links"
            :key="item"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="lang">RU</div>
        <v-btn
          elevation="0"
          color="#0F0F0F"
          class="ml-3"
        >

        </v-btn>
      </v-container>
      </v-app-bar>
    </v-sheet>
    
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
      links: [
        {id: 0, title: 'Главная', icon: 'lock', url: '/login'},
        {id: 1, title: 'О нас', icon: 'face', url: '/registration'},
        {id: 2, title: 'Курсы', icon: 'bookmark_border', url: '/orders'},
        {id: 3, title: 'Галерея', icon: 'note_add', url: '/new'},
        {id: 4, title: 'Контакты', icon: 'list', url: '/list'},
      ],
  }),
};
</script>

<style scoped>
.main-nav-items {
  display: flex;
  align-items: center;
}

.main-nav-item {
  margin-right: 40px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px
}

.main-nav-item:active {
  font-weight: bold;
}

.lang {
  font-size: 16px;
  color: #0F0F0F;
}
</style>
