<template>
  <div class="matters_wrap">

    <!-- 全部事项订单数据 -->
    <div class="matters">
      <div class="mat_menu" v-for="(item, idx) in assList" :key="idx">
        <div>
          <span class="menu_box" v-text="item.name">待发货订单</span>
          <span v-text="item.num">0</span>
        </div>
      </div>

    </div>
    <!-- 全部事项提示消息列表 -->
    <div class="mat_info">

      <div class="infoList" v-for="(item,idx) in matList" :key="idx">
        <div class="info_le">
          <span class="pic_left">
            <!-- <img class="qi" :src="item.src" alt="" /> -->
            <i :class="item.iconName"></i>
          </span>
          <span v-text="item.name"></span>
          <span v-text="item.desc"></span>
        </div>
        <div class="info_ri">
          <span v-text="item.tag"></span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "matters",
  // data: function() {
  //   return {
  //     img: "../../assets/images/red_q.png"
  //   };
  // },
  computed: {
    ...mapState(["assList", "matList"])
  },
  mounted() {
    this.getAssList();
    this.getMatList();
  },
  methods: {
    ...mapActions(["getAssList", "getMatList"]),
    ...mapMutations(["updateAssList", "updateMatList"])
  }
};
</script>

<style lang="scss" scoped>
.matters_wrap {
  width: 100%;
  height: 234px;
  overflow: scroll;
  overflow-x: hidden;
  .matters {
    background: #f7f8fa;
    height: 88px;
    padding-top: 16px;
    .mat_menu {
      width: 33.3%;
      height: 21px;
      float: left;
      overflow: hidden;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-around;
      span {
        color: #323233;
        font-size: 14px;
        cursor: pointer;
      }
      span:nth-child(1):hover {
        color: #000;
        font-weight: bolder;
      }
      span:nth-child(2) {
        margin-left: 10px;
        color: #df4545;
        font-size: 18px;
      }
    }
  }
  .mat_info {
    width: 100%;
    height: 152px;
    > .infoList {
      height: 18px;
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      > .info_le {
        width: 80%;
        line-height: 18px;
        font-size: 12px;
        > .pic_left {
          width: 16px;
          height: 16px;
          display: inline-block;
          // background: #df4545;
          > i {
            width: 16px;
            height: 16px;
            font-size:16px;
            color: #df4545;
          }
        }
        > span:nth-child(2) {
          text-align: center;
          margin-left: 20px;
        }
        > span:nth-child(3) {
          color: #969799;
          margin-left: 20px;
        }
      }
      > .info_ri {
        width: 10%;
        > span {
          height: 18px;
          font-size: 14px;
          color: #155bd4;
          vertical-align: 18px;
        }
      }
    }
  }
}
</style>

