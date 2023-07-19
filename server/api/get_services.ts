export default defineEventHandler((event) => {
    return {
      servcies:{
        message: 'servcies rendered successfully',
        servicesList:[
            {
                name:'EXPRESS DESIGN PROJECT. TECHNICAL PROJECT',
                descriptions:'Technical Solutionint interior design / for those who save time and money.',
                initialImage: 'https://cdn.pixabay.com/photo/2015/12/06/18/02/architecture-1079806_1280.jpg',
                courouselImages:[
                    { url:'https://cdn.pixabay.com/photo/2015/12/06/18/02/architecture-1079806_1280.jpg'},
                    { url:'https://cdn.pixabay.com/photo/2015/12/06/18/02/architecture-1079806_1280.jpg'},
                    { url:'https://cdn.pixabay.com/photo/2015/12/06/18/02/architecture-1079806_1280.jpg'},
                ]
            },
            {
                name:'DESSIGN FOR PRIVATE INTERIORS AND COMMERCIAL OBJECTS',
                descriptions:'Sketchs proposals / working project / computer illustrations for projects (Visualizations)/ selection of finishing material / development of corporate style in the context of interiors soluions',
                initialImage: 'https://cdn.pixabay.com/photo/2017/05/05/15/06/architecture-2287327_1280.jpg',
                courouselImages:[
                    { url:'https://cdn.pixabay.com/photo/2020/12/16/00/10/home-5835289_1280.jpg'},
                    { url:'https://cdn.pixabay.com/photo/2021/10/06/15/05/bathroom-6686057_640.jpg'},
                    { url:'https://cdn.pixabay.com/photo/2018/10/28/12/44/interior-3778708_1280.jpg'},
                ]
            },
            {
                name:'SMART PROJECT',
                descriptions:'Optimal set of design documents for interior design that allows you to quickly plan a family budget for those who are going to make repairs, to get professional informationfor builders',
                initialImage: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_640.jpg',
                courouselImages:[
                    { url:'https://cdn.pixabay.com/photo/2016/09/02/22/36/kitchen-1640439_640.jpg'},
                    { url:'https://cdn.pixabay.com/photo/2017/12/11/13/24/interior-3012218_640.png'},
                    { url:'https://cdn.pixabay.com/photo/2018/01/06/16/35/window-3065345_640.jpg'},
                ]
            },
            {
                name:'ARCHITECTURAL AND ENGINEERING PROJECTS OF PRIVATE RESIDENTS BUILDINGS',
                descriptions:'Developments of a concept or an idea on thumbnail levels/sketch/working project/ wih spouces authorial supervision.',
                initialImage: 'https://cdn.pixabay.com/photo/2019/03/03/15/54/shelves-4032134_640.jpg',
                courouselImages:[
                    { url:'https://cdn.pixabay.com/photo/2016/06/05/22/13/home-1438305_640.jpg'},
                    { url:'https://cdn.pixabay.com/photo/2019/04/23/09/04/indoor-4148894_640.jpg'},
                    { url:'https://cdn.pixabay.com/photo/2014/01/26/13/56/wood-skeleton-252178_640.jpg'},
                ]
            }
        ]
      }
    }
  })