<template>
  <v-app>
    <v-navigation-drawer 
      app 
      temporary
      v-model="drawer"
      right
      color="#F2D140"
    >
      <v-list dense flat>
        <v-list-item-group>
          <v-list-item
            color="primary"
            v-for="link in links"
            :key="link.title"
            class="nav-item-style"
            :ripple="false"
          >
            <v-list-item-title >{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
      <v-app-bar color="#F2D140" height="105" elevation="0">
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
          <div class="lang hidden-sm-and-down">RU</div>
          <v-btn
            elevation="0"
            color="#0F0F0F"
            class="hidden-sm-and-down"
            style="color: white"
            tile
          >
            <v-icon color="white" size="18" class="mr-2">call</v-icon>
            +99365341365
          </v-btn>
        </v-container>
      </v-app-bar>
      <v-sheet color="#F2D140" min-height="714" class="sheet-style">
        <v-container>
          <v-row no-gutters style="margin-top: 120px">
            <v-col cols="12" md="6" sm="12">
              <div class="main-text">Iň aňsat usul bilen öwrenmek</div>
              <div class="main-content">
                Sahypa English Training Center was founded on February 15, 
                2023 by former Merkezi and is currently equipped with advanced technologies
              </div>
              <v-btn
                elevation="0"
                color="#0F0F0F"
                tile
                height="50"
                class="btn"
              >
                Hemme kurslarymyz
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-img 
                src="@/assets/picture1.svg" 
                class="maxin-img"
              />
            </v-col> 
                       
          </v-row>
        </v-container>
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

* {
  text-transform: unset !important;
  letter-spacing: normal;
  font-size: 16px
}
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
  margin-right: 20px;
  margin-left: 40px;
  cursor: pointer
}

.main-text {
  font-size: 80px;
  line-height: 81.44px;
  color: #0F0F0F;
  letter-spacing: 0px;
  font-weight: 700;
  margin-top: 140px
}

.main-content {
  max-width: 463px;
  font-size: 18px;
  line-height: 21.56px;
  font-weight: 400;
}

.maxin-img {
  height: 582px; 
  width: 597px;
  position: absolute
}

.sheet-style {
  height: 714px;
}

.btn {
  color: white; 
  padding: 15px 25px;
  font-size: 14px;
  margin-top: 30px;
  width: 250px;
}
@media screen and (max-width: 960px){
  .main-text {
    font-size: 60px;
    margin-top: 0px;
  }
  .maxin-img {
    height: 486.7px; 
    width: 453px;
    position: absolute;
    margin-top: 20px
  }
  .sheet-style {
    height: 865px;
  }
}


@media screen and (max-width: 830px){
  .sheet-style {
    height: 946px;
  }
}


@media screen and (max-width: 480px){

  .btn {
    width: 100%;
  }
  .main-text {
    font-size: 40px;
    margin-top: 0px;
    line-height: 40px;    
  }
  .maxin-img {
    height: 386.7px; 
    width: 353px;
    position: absolute;
    margin-top: 20px
  }
  .sheet-style {
    height: 763px;
  }
}

@media screen and (max-width: 417px){
  .main-text {
    line-height: 40px;    
  }
  .main-content {
    margin-top: 10px
  }
  .sheet-style {
    height: 794px;
  }
}

::v-deep .v-application--wrap {
  min-height: 0;
}

.nav-item-style {
  font-size: 30px;
  line-height: 30px;
  font-weight: 700
}

</style>
