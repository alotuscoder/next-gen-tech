import { Component, OnInit } from '@angular/core';

enum CATEGORIES {
  AITools = 'AI tools',
  QuantumComputing = 'Quantum Computing',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'next-gen-tech';
  technologiesList: any = [];
  ngOnInit() {
    this.technologiesList = [
      {
        tecnologyName: 'Chat-GPT',
        category: CATEGORIES.AITools,
        link: 'https://openai.com/blog/chatgpt',
      },
      {
        tecnologyName: 'Github Copilot',
        category: CATEGORIES.AITools,
        link: 'https://github.com/features/copilot',
      },
      {
        tecnologyName: 'GPT - 4',
        category: CATEGORIES.AITools,
        link: 'https://openai.com/gpt-4',
      },
      {
        tecnologyName: 'Quantum computer',
        category: CATEGORIES.QuantumComputing,
        link: 'https://www.ibm.com/quantum',
      },
    ];
  }
}
