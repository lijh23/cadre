'use strict'
import Vue from 'vue'
export default function treeToArray (data, expandAll, parent = null, level = null) {
  let tmp = []
  Array.from(data).forEach(function (record) {
    if (record._expanded === undefined) {
      Vue.set(record, '_expanded', expandAll)
    }
    let _level = 1
    if (level !== undefined && level !== null) {
      _level = level + 1
    }
    Vue.set(record, '_level', _level)
    // 如果有父元素
    if (parent) {
      Vue.set(record, 'parent', parent)
    } else {
      tmp.push(record)
    }
    if (record.children && record.children.length > 0) {
      const children = treeToArray(record.children, expandAll, record, _level)
      tmp = tmp.concat(children)
    }
  })
  return tmp
}

/* <style lang="scss" rel="stylesheet/scss" scoped>
//   $color-blue: #2196F3;
//   $space-width: 18px;
//   .ms-tree-space {
//     position: relative;
//     top: 1px;
//     display: inline-block;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 1;
//     width: 18px;
//     height: 14px;
//     &::before {
//       content: ""
//     }
//   }
//   .processContainer{
//     width: 100%;
//     height: 100%;
//   }
//   table td {
//     line-height: 26px;
//   }
//   .tree-ctrl{
//     position: relative;
//     cursor: pointer;
//     color: #2196F3;
//     margin-left: -18px;
//   }
// </style> */
