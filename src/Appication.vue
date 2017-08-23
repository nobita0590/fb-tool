<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      class="pb-0"
      permanent
      absolute
      dark
      clipped
    >
      <v-card >
        <v-list dense>
          <template v-for="(item, i) in items">
            <v-list-group v-if="item.children" v-model="item.model" no-action>
              <v-list-tile slot="item">
                <v-list-tile-action>
                  <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(child, i) in item.children"
                :key="i"
                :to="child.href"
              >
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile :to="item.href">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-toolbar fixed class="teal">
      <v-btn
        icon
        @click.native.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.native.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-app>
        <v-container fluid>
          <div class="breadcrumb-container">
            <router-link :to="'/'"><v-icon class="green--text">home</v-icon></router-link>
            <breadcrumbs class="breadcrumbs"/>
          </div>
          <router-view></router-view>
        </v-container>
      </v-app>

    </main>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  // import breadscrum from './components/Shared/Breadcrumb'
  export default {
    // components: {breadscrum},
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: true,
        dark: true,
        items: [
          { href: '/', icon: 'contacts', text: 'Contacts' },
          { href: '/test/', icon: 'history', text: 'Frequently contacted' },
          { href: '/test/list', icon: 'content_copy', text: 'Duplicates' },
          {
            icon: 'keyboard_arrow_up',
            'icon-alt': 'keyboard_arrow_down',
            text: 'Labels',
            model: true,
            children: [
              { href: '/test/abc', icon: 'add', text: 'Create label' }
            ]
          },
          {
            icon: 'keyboard_arrow_up',
            'icon-alt': 'keyboard_arrow_down',
            text: 'More',
            model: false,
            children: [
              { text: 'Import' },
              { text: 'Export' },
              { text: 'Print' },
              { text: 'Undo changes' },
              { text: 'Other contacts' }
            ]
          },
          { icon: 'settings', text: 'Settings' },
          { icon: 'chat_bubble', text: 'Send feedback' },
          { icon: 'help', text: 'Help' },
          { icon: 'phonelink', text: 'App downloads' },
          { icon: 'keyboard', text: 'Got to the old version' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Main app'
      }
    }
  }
  /* let s = `<v-slide-y-transition mode="out-in">
            <v-layout column align-center>
              <v-card></v-card>
              <img src="/public/v.png" alt="Vuetify.js" class="mb-5" />
              <blockquote>
                &#8220;First, solve the problem. Then, write the code.&#8221;
                <footer>
                  <small>
                    <em>&mdash;John Johnson  njn</em>
                  </small>
                </footer>
              </blockquote>
            </v-layout>
          </v-slide-y-transition>`; */
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
<style scoped>
  .breadcrumb-container {margin-bottom:15px; color:#777; background:#eee; padding:5px; overflow:hidden;}
  .breadcrumb-container > a {float:left; color:#999; text-decoration:none;}
  .breadcrumb-container > a i {color:#999; font-size:18px;}
  .breadcrumb-container ol {margin:0; padding:0 10px; line-height:23px; float:left}
  .breadcrumb-container ol .breadcrumb-item {padding:0; margin-right:7px;}
  .breadcrumb-container ol .breadcrumb-item ::before {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "\f101";
    padding-right: 12px;
    color: #777;
  }
  .breadcrumb-container ol .breadcrumb-item::last-child {padding:0 8px;}
  .breadcrumb-container ol .breadcrumb-item a {text-decoration:none; padding:0 8px;}
</style>
