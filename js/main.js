
$(function() {
  $('.bootstrapTable').bootstrapTable({
    sortable:true,
    height:300,
    columns:[{
      title:'姓名',
      field:'name'
    },
    {
      title:'年龄',
      field:'age',
      sortable:true,
      sortName:'age'
    },
    {
      title:'生日',
      field:'bir'
    },
    {
      title:'性别',
      field:'sex',
      sortable:true,
      sortName:'sex'
    }
  ],
  //   data:[
  //     {
  //     name:'张三',
  //     age:21,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三2',
  //     age:22,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三3',
  //     age:23,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三4',
  //     age:24,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三5',
  //     age:25,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三5',
  //     age:25,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三5',
  //     age:25,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三5',
  //     age:25,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三5',
  //     age:25,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三5',
  //     age:25,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三5',
  //     age:25,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三5',
  //     age:25,
  //     bir:'aaaa',
  //     sex:'男'
  //   },
  //   {
  //     name:'张三6',
  //     age:26,
  //     bir:'aaaa',
  //     sex:'男'
  //   }
  // ]
  url:'https://www.easy-mock.com/mock/5a73dd05e5392942463442ff/example/prods/list',
  method:'get',
  dataType:'json',
  sidePagination:'server',
  queryParams:function(opt){
    var op={
      numpage:opt.limit,
      startNum:opt.offset,
      sortby:opt.sort,
      orderby:opt.order
    }
    console.log(opt.sort+','+opt.order)
    return op
  }
});
});