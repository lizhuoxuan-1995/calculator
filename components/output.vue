<template>
  <ul>
    <li v-for="(ele, index) in vlist" :key="ele.name">
      <span>{{ ele.name }} :</span>
      <span>{{ damageSta[index] }}%</span>
    </li>
    <span class="final">最终加成：{{ show }}%</span>
  </ul>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  props: {
    vlist: Array
  },
  computed: {
    ...mapState('Stat', ["damageSta"]),
    ...mapGetters('Stat', {
      show: 'show',
    })
  }
};
</script>

<style scoped>
ul {
  position: relative;
  border: 1px solid #008c8c;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}

li {
  list-style: none;
  display: inline-block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  position: relative;
  margin: 5px 60px 5px 10px;
  position: relative;
}

.final {
  display: inline-block;
  margin: 5px 100px 5px 10px;
  width: 800px;
  height: 30px;
  line-height: 30px;
}

li span:last-child {
  position: absolute;
  top: 0;
  right: 40px;
  display: inline-block;
  width: 50px;
  text-align: center;
}

li span:nth-of-type(2) {
  vertical-align: baseline;
}
</style>