import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import APP_CONFIG from './home.config';
import { Node, Link } from '../d3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  nodes: Node[] = [];
  links: Link[] = [];

  jobs = {
    "nodes": [
      {"id": "Myriel", "group": 1},
      {"id": "Napoleon", "group": 1},
      {"id": "Mlle.Baptistine", "group": 1},
      {"id": "Mme.Magloire", "group": 1},
      {"id": "CountessdeLo", "group": 1},
      {"id": "Geborand", "group": 1},
      {"id": "Champtercier", "group": 1},
      {"id": "Cravatte", "group": 1},
      {"id": "Count", "group": 1},
      {"id": "OldMan", "group": 1},
      {"id": "Labarre", "group": 2},
      {"id": "Valjean", "group": 2},
      {"id": "Marguerite", "group": 3},
      {"id": "Mme.deR", "group": 2},
      {"id": "Isabeau", "group": 2},
      {"id": "Gervais", "group": 2},
      {"id": "Tholomyes", "group": 3},
      {"id": "Listolier", "group": 3},
      {"id": "Fameuil", "group": 3},
      {"id": "Blacheville", "group": 3},
      {"id": "Favourite", "group": 3},
      {"id": "Dahlia", "group": 3},
      {"id": "Zephine", "group": 3},
      {"id": "Fantine", "group": 3},
      {"id": "Mme.Thenardier", "group": 4},
      {"id": "Thenardier", "group": 4},
      {"id": "Cosette", "group": 5},
      {"id": "Javert", "group": 4},
      {"id": "Fauchelevent", "group": 0},
      {"id": "Bamatabois", "group": 2},
      {"id": "Perpetue", "group": 3},
      {"id": "Simplice", "group": 2},
      {"id": "Scaufflaire", "group": 2},
      {"id": "Woman1", "group": 2},
      {"id": "Judge", "group": 2},
      {"id": "Champmathieu", "group": 2},
      {"id": "Brevet", "group": 2},
      {"id": "Chenildieu", "group": 2},
      {"id": "Cochepaille", "group": 2},
      {"id": "Pontmercy", "group": 4},
      {"id": "Boulatruelle", "group": 6},
      {"id": "Eponine", "group": 4},
      {"id": "Anzelma", "group": 4},
      {"id": "Woman2", "group": 5},
      {"id": "MotherInnocent", "group": 0},
      {"id": "Gribier", "group": 0},
      {"id": "Jondrette", "group": 7},
      {"id": "Mme.Burgon", "group": 7},
      {"id": "Gavroche", "group": 8},
      {"id": "Gillenormand", "group": 5},
      {"id": "Magnon", "group": 5},
      {"id": "Mlle.Gillenormand", "group": 5},
      {"id": "Mme.Pontmercy", "group": 5},
      {"id": "Mlle.Vaubois", "group": 5},
      {"id": "Lt.Gillenormand", "group": 5},
      {"id": "Marius", "group": 8},
      {"id": "BaronessT", "group": 5},
      {"id": "Mabeuf", "group": 8},
      {"id": "Enjolras", "group": 8},
      {"id": "Combeferre", "group": 8},
      {"id": "Prouvaire", "group": 8},
      {"id": "Feuilly", "group": 8},
      {"id": "Courfeyrac", "group": 8},
      {"id": "Bahorel", "group": 8},
      {"id": "Bossuet", "group": 8},
      {"id": "Joly", "group": 8},
      {"id": "Grantaire", "group": 8},
      {"id": "MotherPlutarch", "group": 9},
      {"id": "Gueulemer", "group": 4},
      {"id": "Babet", "group": 4},
      {"id": "Claquesous", "group": 4},
      {"id": "Montparnasse", "group": 4},
      {"id": "Toussaint", "group": 5},
      {"id": "Child1", "group": 10},
      {"id": "Child2", "group": 10},
      {"id": "Brujon", "group": 4},
      {"id": "Mme.Hucheloup", "group": 8}
    ],
    "links": [
      {"source": "Napoleon", "target": "Myriel", "value": 1},
      {"source": "Mlle.Baptistine", "target": "Myriel", "value": 8},
      {"source": "Mme.Magloire", "target": "Myriel", "value": 10},
      {"source": "Mme.Magloire", "target": "Mlle.Baptistine", "value": 6},
      {"source": "CountessdeLo", "target": "Myriel", "value": 1},
      {"source": "Geborand", "target": "Myriel", "value": 1},
      {"source": "Champtercier", "target": "Myriel", "value": 1},
      {"source": "Cravatte", "target": "Myriel", "value": 1},
      {"source": "Count", "target": "Myriel", "value": 2},
      {"source": "OldMan", "target": "Myriel", "value": 1},
      {"source": "Valjean", "target": "Labarre", "value": 1},
      {"source": "Valjean", "target": "Mme.Magloire", "value": 3},
      {"source": "Valjean", "target": "Mlle.Baptistine", "value": 3},
      {"source": "Valjean", "target": "Myriel", "value": 5},
      {"source": "Marguerite", "target": "Valjean", "value": 1},
      {"source": "Mme.deR", "target": "Valjean", "value": 1},
      {"source": "Isabeau", "target": "Valjean", "value": 1},
      {"source": "Gervais", "target": "Valjean", "value": 1},
      {"source": "Listolier", "target": "Tholomyes", "value": 4},
      {"source": "Fameuil", "target": "Tholomyes", "value": 4},
      {"source": "Fameuil", "target": "Listolier", "value": 4},
      {"source": "Blacheville", "target": "Tholomyes", "value": 4},
      {"source": "Blacheville", "target": "Listolier", "value": 4},
      {"source": "Blacheville", "target": "Fameuil", "value": 4},
      {"source": "Favourite", "target": "Tholomyes", "value": 3},
      {"source": "Favourite", "target": "Listolier", "value": 3},
      {"source": "Favourite", "target": "Fameuil", "value": 3},
      {"source": "Favourite", "target": "Blacheville", "value": 4},
      {"source": "Dahlia", "target": "Tholomyes", "value": 3},
      {"source": "Dahlia", "target": "Listolier", "value": 3},
      {"source": "Dahlia", "target": "Fameuil", "value": 3},
      {"source": "Dahlia", "target": "Blacheville", "value": 3},
      {"source": "Dahlia", "target": "Favourite", "value": 5},
      {"source": "Zephine", "target": "Tholomyes", "value": 3},
      {"source": "Zephine", "target": "Listolier", "value": 3},
      {"source": "Zephine", "target": "Fameuil", "value": 3},
      {"source": "Zephine", "target": "Blacheville", "value": 3},
      {"source": "Zephine", "target": "Favourite", "value": 4},
      {"source": "Zephine", "target": "Dahlia", "value": 4},
      {"source": "Fantine", "target": "Tholomyes", "value": 3},
      {"source": "Fantine", "target": "Listolier", "value": 3},
      {"source": "Fantine", "target": "Fameuil", "value": 3},
      {"source": "Fantine", "target": "Blacheville", "value": 3},
      {"source": "Fantine", "target": "Favourite", "value": 4},
      {"source": "Fantine", "target": "Dahlia", "value": 4},
      {"source": "Fantine", "target": "Zephine", "value": 4},
      {"source": "Fantine", "target": "Marguerite", "value": 2},
      {"source": "Fantine", "target": "Valjean", "value": 9},
      {"source": "Mme.Thenardier", "target": "Fantine", "value": 2},
      {"source": "Mme.Thenardier", "target": "Valjean", "value": 7},
      {"source": "Thenardier", "target": "Mme.Thenardier", "value": 13},
      {"source": "Thenardier", "target": "Fantine", "value": 1},
      {"source": "Thenardier", "target": "Valjean", "value": 12},
      {"source": "Cosette", "target": "Mme.Thenardier", "value": 4},
      {"source": "Cosette", "target": "Valjean", "value": 31},
      {"source": "Cosette", "target": "Tholomyes", "value": 1},
      {"source": "Cosette", "target": "Thenardier", "value": 1},
      {"source": "Javert", "target": "Valjean", "value": 17},
      {"source": "Javert", "target": "Fantine", "value": 5},
      {"source": "Javert", "target": "Thenardier", "value": 5},
      {"source": "Javert", "target": "Mme.Thenardier", "value": 1},
      {"source": "Javert", "target": "Cosette", "value": 1},
      {"source": "Fauchelevent", "target": "Valjean", "value": 8},
      {"source": "Fauchelevent", "target": "Javert", "value": 1},
      {"source": "Bamatabois", "target": "Fantine", "value": 1},
      {"source": "Bamatabois", "target": "Javert", "value": 1},
      {"source": "Bamatabois", "target": "Valjean", "value": 2},
      {"source": "Perpetue", "target": "Fantine", "value": 1},
      {"source": "Simplice", "target": "Perpetue", "value": 2},
      {"source": "Simplice", "target": "Valjean", "value": 3},
      {"source": "Simplice", "target": "Fantine", "value": 2},
      {"source": "Simplice", "target": "Javert", "value": 1},
      {"source": "Scaufflaire", "target": "Valjean", "value": 1},
      {"source": "Woman1", "target": "Valjean", "value": 2},
      {"source": "Woman1", "target": "Javert", "value": 1},
      {"source": "Judge", "target": "Valjean", "value": 3},
      {"source": "Judge", "target": "Bamatabois", "value": 2},
      {"source": "Champmathieu", "target": "Valjean", "value": 3},
      {"source": "Champmathieu", "target": "Judge", "value": 3},
      {"source": "Champmathieu", "target": "Bamatabois", "value": 2},
      {"source": "Claquesous", "target": "Eponine", "value": 1}      
    ]
  }

  elegantForm: FormGroup;
  selectedJob = {
    "Name": "Praveen",
    "ID": "27607",
    "Type": "IT"
  };
  searchText: string;
  characters = {
    "nodes": [
      {"id": "Myriel", "group": 1},
      {"id": "Napoleon", "group": 1},
      {"id": "Mlle.Baptistine", "group": 1},
      {"id": "Mme.Magloire", "group": 1},
      {"id": "CountessdeLo", "group": 1},
      {"id": "Geborand", "group": 1},
      {"id": "Champtercier", "group": 1},
      {"id": "Cravatte", "group": 1},
      {"id": "Count", "group": 1},
      {"id": "OldMan", "group": 1},
      {"id": "Labarre", "group": 2},
      {"id": "Valjean", "group": 2},
      {"id": "Marguerite", "group": 3},
      {"id": "Mme.deR", "group": 2},
      {"id": "Isabeau", "group": 2},
      {"id": "Gervais", "group": 2},
      {"id": "Tholomyes", "group": 3},
      {"id": "Listolier", "group": 3}
    ]};

constructor(public fb: FormBuilder, private router: Router) {
  this.elegantForm = fb.group({
    searchText: ['']
  });

  const N = APP_CONFIG.N,
          getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let j of this.jobs.nodes) {
      this.nodes.push(new Node(j.id));
      console.log(j.id);
    }


    for(let l of this.jobs.links) {
      this.links.push(new Link(l.source, l.target));
    }



    // for (let i = 1; i <= N; i++) {
    //   for (let m = 2; i * m <= N; m++) {
    //     /** increasing connections toll on connecting nodes */
    //     this.nodes[getIndex(i)].linkCount++;
    //     this.nodes[getIndex(i * m)].linkCount++;

    //     /** connecting the nodes before starting the simulation */
    //     this.links.push(new Link(i, i * m));
    //   }
    // }
}

  ngOnInit() {
    
  }

  getProjects(text) {
    console.log("searched  " + text.searchText);
  }

  onSelect(c:any) {
    this.selectedJob = c;
  }


}
