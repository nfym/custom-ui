/**
 * 将扁平数组转换成树结构
 * @param list 扁平数组
 * @param options 树解析map
 * @returns
 */
function transformTree(
  list: any[] = [],
  options = {
    keyField: "id",
    childField: "children",
    parentField: "pid",
  }
) {
  const { keyField, childField, parentField } = options;

  const tree: any[] = [];
  const record: any = {};

  for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i];
    const id = item[keyField];

    if (!id) {
      continue;
    }

    if (record[id]) {
      item[childField] = record[id];
    } else {
      item[childField] = record[id] = [];
    }

    if (item[parentField]) {
      const parentId = item[parentField];

      if (!record[parentId]) {
        record[parentId] = [];
      }

      record[parentId].push(item);
    } else {
      tree.push(item);
    }
  }

  return tree;
}

export default transformTree;

// ```tsx | pure
// import { transformTree } from 'xijs';

// const data = [
//   {
//     id: '0',
//     name: '趣谈前端',
//     pid: '',
//   },
//   {
//     id: '0-1',
//     name: 'js',
//     pid: '0',
//   },
//   {
//     id: '0-2',
//     name: 'css',
//     pid: '0',
//   },
//   {
//     id: '0-2-1',
//     name: 'css3',
//     pid: '0-2',
//   },
// ];

// console.log(transformTree(data));
// /**
//  [
//    {
//      id: '0',
//      name: '趣谈前端',
//      pid: '',
//      children: [
//        {
//         id: '0-1',
//         name: 'js',
//         pid: '0',
//         children: []
//       },
//       {
//         id: '0-2',
//         name: 'css',
//         pid: '0',
//         children: [
//           {
//             id: '0-2-1',
//             name: 'css3',
//             pid: '0-2',
//             children: []
//           },
//         ]
//       },
//      ]
//    }
//  ]
//    */
// ```
