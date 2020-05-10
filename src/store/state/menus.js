const menuState = {
  menus: [
    {
      id:1,
      icon: "dashboard",
      title: "Dashboard",
      target: "dashBoard",
      //authority: 
    },
    {
      id:2,
      icon: "assignment_ind",
      title: "메뉴1",
      model: false,
      childrens: [
        {
          id:2-1,
          icon: "assignment_ind",
          title: "메뉴1-1",
          target: "usersList",
          //authority: 
        },
        {
          id:2-2,
          icon: "people_alt",
          title: "메뉴1-2",
          target: "corpsList",
          //authority: 
        }
      ]
    },
    {
      id:3,
      icon: "loop",
      title: "메뉴2",
      target: "codeList",
      //authority: 
    },
    {
      id:4,
      icon: "trending_up",
      title: "메뉴3",
      target: "estimatesList",
      //authority: 
    },
  ]
}
  
export default menuState;