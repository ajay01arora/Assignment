import { Component, OnInit } from '@angular/core';
import { IPrecaution } from '../interfaces/IPrecaution';

@Component({
  selector: 'app-precaution',
  templateUrl: './precaution.component.html',
  styleUrls: ['./precaution.component.css']
})
export class PrecautionComponent implements OnInit {

  constructor() { }

  precautionList : IPrecaution[];

  ngOnInit(): void {
    this.listAllPrecaution();
  }

  listAllPrecaution()
  {
    this.precautionList = [
      {
        precautionTitle : "Wash your hands frequently.",
        image: "https://media.npr.org/assets/img/2020/03/13/handwashingforrealfinal_custom-7c42912bb35787e71c3611da45198082a3c52e7a-s1100-c15.jpg",
        content : "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.",
        reason : "Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands."
      },
      {
        precautionTitle : "Maintain social distancing",
        image: "https://www.safetyandhealthmagazine.com/ext/resources/images/news/concepts/social-distance.jpg?1584635268",
        content : "Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.",
        reason : "When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease."
      },
      {
        precautionTitle : "Avoid touching eyes, nose and mouth",
        image: "https://scontent.fdel3-2.fna.fbcdn.net/v/t1.0-9/90554643_2904109919669663_7222196127670468608_n.png?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=Ocw39mO06msAX8n6GLU&_nc_ht=scontent.fdel3-2.fna&oh=a0160542d2494553bb049022eb30e4e6&oe=5ECD241A",
        content : "",
        reason : "Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick."
      },
      {
        precautionTitle : "If you have fever, cough and difficulty breathing, seek medical care early",
        image: "https://image.freepik.com/free-vector/flu-symptoms-people-demonstrating-cold-sickness-fever-cough-snot-chills-dizziness-vector-characters-flu-prevention-poster_53562-9205.jpg",
        content : "Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.",
        reason : "National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections."
      },
    ]
  }

}
