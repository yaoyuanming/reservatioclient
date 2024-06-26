<template>
  <view class="tab">
       <view v-for="(item,index) in list" :key="index" class="tab-item" @click="switchTab(item, index)">
          <image class="tab_img" :src="currentIndex == index ? item.selectedIconPath : item.iconPath"></image>
          <view class="tab_text" :style="{color: currentIndex == index ? selectedColor : color}">{{item.text}}</view>
      </view>
  </view>
</template>

<script>
  export default {
      props: {
          selectedIndex: { // 当前选中的tab index
              default: 0
          },
      },
      data() {
          return {
              color: "#666666",
              selectedColor: "#00BAB2",
              list: [],
              currentIndex:0,
          }
      },
      created() {
          this.currentIndex = this.selectedIndex;
          
          let _this = this
          
          if (uni.getStorageSync('identify') == 'tom') {
              //角色1
              _this.list = [{
                      "pagePath": "/pages/index/index",
                      "iconPath": "/static/tab/home.png",
                      "selectedIconPath": "/static/tab/home_active.png",
                      "text": "首页"
                  },
                  {
                      "pagePath": "/pages/my/my",
                      "iconPath": "/static/tab/my.png",
                      "selectedIconPath": "/static/tab/my_active.png",
                      "text": "我的"
                  }
              ]
          } else {
              //角色2
              _this.list = [{
                      "pagePath": "/pages/index/index",
                      "iconPath": "/static/tab/home.png",
                      "selectedIconPath": "/static/tab/home_active.png",
                      "text": "首页"
                  },
                  {
                     "pagePath": "/pages/warn/warn",
                     "iconPath": "/static/tab/warn.png",
                     "selectedIconPath": "/static/tab/warn_active.png",
                     "text": "告警"
                  },
                  {
                      "pagePath": "/pages/my/my",
                      "iconPath": "/static/tab/my.png",
                      "selectedIconPath": "/static/tab/my_active.png",
                      "text": "我的"
                  }
              ]
          }
      },
      methods: {
          switchTab(item, index) {
              this.currentIndex = index;
              let url = item.pagePath;
              uni.redirectTo({url:url})
              
          }
      }
  }
</script>

<style lang="scss">
  .tab {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100rpx;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: env(safe-area-inset-bottom); // 适配iphoneX的底部

      .tab-item {
          flex: 1;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .tab_img {
              width: 60rpx;
              height: 60rpx;
          }
          .tab_text {
              font-size: 30rpx;
              margin-top: 9rpx;
          }
      }
  }
</style>