const menuState = {
  menus: [
    {
      id:1,
      icon: "assignment_ind",
      title: "페이지1",
      target: "Index"
    },
    {
      id:2,
      icon: "loop",
      title: "페이지2",
      target: "Page2",
      model: false,
      childrens: [
        {
          id:2-1,
          icon: "assignment_ind",
          title: "페이지2_1",
          target: "Page2_1",
        },
        {
          id:2-2,
          icon: "people_alt",
          title: "페이지2_2",
          target: "Page2_2",
        }
      ]
    },
    {
      id:3,
      icon: "trending_up",
      title: "페이지3",
      target: "Page3",
    },
  ]
}
  
export default menuState;