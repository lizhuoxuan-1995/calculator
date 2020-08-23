export default {
  namespaced: true,
  state: {
    countArray: [
      {
        valueArr: []
      }, {
        valueArr: []
      }, {
        valueArr: []
      }, {
        valueArr: []
      }, {
        valueArr: []
      }, {
        valueArr: []
      }, {
        valueArr: []
      }, {
        valueArr: []
      }, {
        valueArr: []
      }
    ],
    damageSta: new Array(9).fill(0),
    propertyAttack: 0,
    additionAttack: 0,
  },
  getters: {
    // 相当于计算属性
    show(state, getters) {
      let a = state.damageSta;
      let b =
        (a[0] / 100 + 1) *
        (a[1] / 100 + 1) *
        (a[2] / 100 + 1) *
        (a[3] / 100 + 1) *
        (a[4] / 100 + 1) *
        (a[5] / 100 + 1) *
        (a[7] / 100 + 1) *
        (a[8] / 100 + 1);
      return Math.round(b * getters.num);
    },
    num() {
      return 100;
    }
  },
  mutations: {
    add(state, { index, value }) {  //只能接收两个参数，第二个参数可以用对象的方式传入多个值
      state.countArray[index].valueArr.push(value);
      console.log(state.countArray);
      console.log(index)
    },
    repeal(state, index) {
      state.countArray[index].valueArr.pop();
    },
    count(state, index) {
      if (index == 7) {
        let sum = 1;
        state.countArray[index].valueArr.forEach(ele => {
          sum *= Number(ele) / 100 + 1;
        });
        state.damageSta.splice(index, 1, (sum * 100 - 100).toPrecision(4));
      } else {
        let sum = 0;
        state.countArray[index].valueArr.forEach(ele => {
          sum += Number(ele);
        });
        if (index == 0) {
          state.damageSta.splice(index, 1, Math.round(sum + state.additionAttack));
        } else if (index == 5) {
          state.propertyAttack = sum + 250;
          state.damageSta.splice(index, 1, ((((1.05 + 0.0045 * (sum + 250)) / (1.05 + 0.0045 * 250)) - 1) * 100).toPrecision(4));
        } else if (index == 6) {
          state.additionAttack = sum * (state.propertyAttack / 220 + 1);
          state.damageSta.splice(index, 1, Math.round(sum * (state.propertyAttack / 220 + 1)));
        } else {
          state.damageSta.splice(index, 1, Math.round(sum));
        }
      }
    }
  },
  actions: {
    count(ctx, index) {
      ctx.commit('count', index);// ctx为整个store对象
    }
  }
}