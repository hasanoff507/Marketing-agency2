
import img1 from "./assets/main/portfolio/photo_2023-10-15_13-35-44.jpg";
import img2 from "./assets/main/portfolio/01.jpg";
import img3 from "./assets/main/portfolio/photo_2023-10-15_13-35-53.jpg";
import img4 from "./assets/main/portfolio/photo_2023-10-15_13-36-01.jpg";
import img5 from "./assets/main/portfolio/photo_2023-10-15_13-36-05.jpg";
import img6 from "./assets/main/portfolio/612.png";
import img7 from "./assets/main/portfolio/02.jpg";
import img8 from "./assets/main/portfolio/13.jpg";
import img9 from "./assets/main/portfolio/12.jpg";
import Text from "./language/langManager";
import flag1 from "./assets/img/navbar/uzbekistan-flag-icon.png"
import flag2 from "./assets/img/navbar/russia-flag-icon.png"
import flag3 from "./assets/img/navbar/united-kingdom-flag-icon.png"




export const data = {
  languages:[
   {
    id:0,
    title:"UZ",
    img:flag1
   },
   {
    id:1,
    title:"RU",
    img:flag2

   },
   {
    id:2,
    title:"ENG",
    img:flag3

   }

  ],
    navData:[
      {
        id:0,
        link:"home",
        title:<Text id={"navbarTitle1"}/>
    },
    {
        id:1,
        link:"our-service",
        title:<Text id={"navbarTitle2"}/>
    },
    {
        id:2,
        link:"pricing",
        title:<Text id={"navbarTitle3"}/>
    },
    {
        id:3,
        link:"projects",
        title:<Text id={"navbarTitle4"}/>
    },
    {
        id:4,
        link:"AboutUs",
        title:<Text id={"navbarTitle5"}/>
    },
    {
        id:6,
        link:"contact",
        title:<Text id={"navbarTitle6"}/>
    },
    ],

    price:[
        {
            id:0,
            title:<Text id="priceCardtitle1"/>,
            price:"$500",
            subtitle:"",
            texts:[
              {
                id:0,
                title:<Text id="priceCardtext1"/>
              },
              {
                id:1,
                title:<Text id="priceCardtext2"/>
              },
              {
                id:2,
                title:<Text id="priceCardtext3"/>
              },
              {
                id:3,
                title:<Text id="priceCardtext4"/>
              },
              {
                id:4,
                title:<Text id="priceCardtext5"/>
              },
              {
                id:5,
                title:<Text id="priceCardtext6"/>
              },
              {
                id:6,
                title:<Text id="priceCardtext7"/>
              },
              {
                id:7,
                title:<Text id="priceCardtext8"/>
              },
              {
                id:8,
                title:<Text id="priceCardtext9"/>
              },
              {
                id:9,
                title:<Text id="priceCardtext10"/>
              },
            ]
        },
        {
            id:1,
            title:"Premium",
            price:"$1000",
            subtitle:"",
            texts:[
              {
                id:0,
                title:<Text id="priceCard2text1"/>
              },
              {
                id:1,
                title:<Text id="priceCardtext22"/>
              },
              {
                id:2,
                title:<Text id="priceCard2text3"/>
              },
              {
                id:3,
                title:<Text id="priceCard2text4"/>
              },
              {
                id:4,
                title:<Text id="priceCard2text5"/>
              },
              {
                id:5,
                title:<Text id="priceCard2text6"/>
              },
              {
                id:6,
                title:<Text id="priceCard2text7"/>
              },
              {
                id:7,
                title:<Text id="priceCard2text8"/>
              },
              {
                id:8,
                title:<Text id="priceCard2text9"/>
              },
              {
                id:9,
                title:<Text id="priceCard2text10"/>
              },
              {
                id:10,
                title:<Text id="priceCard2text11"/>
              },
              {
                id:11,
                title:<Text id="priceCard2text12"/>
              },
              
            ]
        },
        {
            id:2,
            title:"Enterprise",
            price:<Text id="priceCard3Subtitle1"/>,
            subtitle:<Text id="priceCard3Subtitle2"/>,
            texts:[
              {
                id:0,
                title:<Text id="priceCard3text1"/>
              },
              {
                id:1,
                title:<Text id="priceCard3text3"/>
              },
              {
                id:2,
                title:<Text id="priceCard3text4"/>
              },
              {
                id:3,
                title:<Text id="priceCard3text5"/>
              },
              {
                id:4,
                title:<Text id="priceCard3text6"/>
              },
              {
                id:5,
                title:<Text id="priceCard3text7"/>
              },
              {
                id:6,
                title:<Text id="priceCard3text8"/>
              },
              {
                id:7,
                title:<Text id="priceCard3text9"/>
              },
              {
                id:8,
                title:<Text id="priceCard3text10"/>
              },
              {
                id:9,
                title:<Text id="priceCard3text11"/>
              },
              {
                id:10,
                title:<Text id="priceCard3text12"/>
              },
            ]
        },
    ],

    projects:[
      {
        id: 0,
        img: img8,
        title: "Agro Finans Lizing",
        description:<Text id="clientCardText0"/>,
        link: "https://agrofinanslizing.uz/",
      },
      {
        id: 1,
        img: img9,
        title: "Pomodoro",
        description:
        <Text id="clientCardText1"/>,
        link: "https://www.chefpomodoro.com/",
      },
       
        {
          id: 2,
          img: img3,
          title: "EXANTE",
          description:
          <Text id="clientCardText2"/>,
          link: "https://exante.eu/",
        },
        {
          id: 3,
          img: img4,
          title: "AllHDD",
          description:
          <Text id="clientCardText3"/>,
          link: "https://www.allhdd.com/",
        },
        {
          id: 4,
          img: img5,
          title: "AVATRADE",
          description:
          <Text id="clientCardText4"/>,
          link: "https://www.avatrade.com/",
        },
        {
          id: 6,
          img: img2,
          title: "CEDRUS",
          description:
          <Text id="clientCardText5"/>,
          link: "https://www.cedrus-residence.ch/it/",
        },
        {
          id: 7,
          img: img7,
          title: "SAXO",
          description:
          <Text id="clientCardText6"/>,
          link: "https://www.home.saxo/",
        },
        {
          id: 8,
          img: img1,
          title: "UNHCR",
          description:
          <Text id="clientCardText7"/>,
          link: "https://www.unhcr.org/",
        },
        {
          id: 9,
          img: img6,
          title: "TRUSTPILOT",
          description:
          <Text id="clientCardText8"/>,
          link: "https://www.trustpilot.com/",
        },
        
      ]

}
