import { Component } from '@angular/core';
import { DetectarDispositivoService } from 'src/app/compartidos/services/detectar-dispositivo.service';

@Component({
  selector: 'app-elegir-persona-enviar-mensaje',
  templateUrl: './elegir-persona-enviar-mensaje.component.html',
  styleUrls: ['./elegir-persona-enviar-mensaje.component.css']
})
export class ElegirPersonaEnviarMensajeComponent {
  isMobileDevice: boolean | undefined;

  constructor(private dispositivoService: DetectarDispositivoService) {
    this.isMobileDevice = false;
  }

  ngOnInit(): void {
    // Detectar si es un dispositivo móvil al inicializar el componente
    this.isMobileDevice = this.dispositivoService.isMobile();
  }
}
