import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css']
})
export class BlogComponent {
  today = new Date();

  noticias = [
    {
      id: 1,
      titulo: 'El arte del minimalismo en el diseño moderno',
      imagen: 'https://picsum.photos/id/10/800/500',
      texto: 'Descubre cómo la simplicidad está redefiniendo las interfaces digitales en el siglo XXI.',
      fecha: '2026-02-21'
    },
    {
      id: 2,
      titulo: 'Arquitectura sostenible',
      imagen: 'https://picsum.photos/id/101/800/500',
      texto: 'Nuevos materiales que respiran y reducen el consumo energético en las ciudades.',
      fecha: '2026-02-18'
    },
    {
      id: 3,
      titulo: 'Interfaces biomiméticas',
      imagen: 'https://picsum.photos/id/190/800/500',
      texto: 'Explorando cómo los patrones de la naturaleza optimizan la experiencia de usuario.',
      fecha: '2026-02-23'
    },
    {
      id: 4,
      titulo: 'El futuro del espacio urbano',
      imagen: 'https://picsum.photos/id/122/800/500',
      texto: 'Hacia ciudades peatonales: la integración de zonas verdes en el urbanismo denso.',
      fecha: '2026-02-22'
    },
  ];

  nuevaNoticia = { titulo: '', imagen: '', texto: '', fecha: '' };

  isFormValid(): boolean {
    return !!(this.nuevaNoticia.titulo && this.nuevaNoticia.texto && this.nuevaNoticia.imagen && this.nuevaNoticia.fecha);
  }

  agregarNoticia(): void {
    if (this.isFormValid()) {
      this.noticias.unshift({
        ...this.nuevaNoticia,
        id: Date.now()
      });
      this.nuevaNoticia = { titulo: '', imagen: '', texto: '', fecha: '' };
    }
  }

  eliminarNoticia(id: number): void {
    this.noticias = this.noticias.filter(n => n.id !== id);
  }
}