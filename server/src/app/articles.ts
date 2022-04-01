export interface Article {
  id: number;
  name: string;
  link: string;
  description: string;
  source: string;
  publish_date: string;
}

export const articles = [
  {
    id: 1,
    description: "Change Defintion of anti-vax",
    link: "https://pjmedia.com/news-and-politics/matt-margolis/2021/09/08/the-cdc-just-made-an-orwellian-change-to-the-definition-of-vaccine-and-vaccination-n1476799",
    name: 'Orwellian Change',
    source: 'PJ Media',
    publish_date: '9/8/2021'
  },
  {
    id: 1,
    description: "Change Defintion of anti-vax",
    link: "https://pjmedia.com/news-and-politics/matt-margolis/2021/09/08/the-cdc-just-made-an-orwellian-change-to-the-definition-of-vaccine-and-vaccination-n1476799",
    name: 'Orwellian Change2',
    source: 'PJ Media',
    publish_date: '9/8/2021'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/