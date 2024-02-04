import { TestBed, fakeAsync, tick } from '@angular/core/testing';
// imports para a realização de testes das requisições
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EnvioService } from './envio.service';
import { Desenho } from '../interfaces/Desenho';

describe('EnvioService', () => {
  let service: EnvioService;
  let httpMock: HttpTestingController; //declaração da classe

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnvioService]
    });
    service = TestBed.inject(EnvioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

 /* it('should be created', () => {
    expect(service).toBeTruthy();
  }); */

  it('request should be success', fakeAsync(() => {
    const body: Desenho = {
      //id: 1,
    nome: 'teste',
    autor: 'teste',
    descricao: 'teste',
    disponibilidade: 'teste',
    estudio: 'teste',
    maxEps: 11111111,
    dtLancamento: 11111111,
    nacionalidade: 'teste',
    status: 'teste',
    statusVisto: 'teste',
    temps: 11111111, 
    };

    const spy = spyOn(console, 'log').and.callThrough();

    service.sendDados(body);

    const request = httpMock.expectOne((req) => {
      return req.method === 'POST';
    });

    request.flush(null, {
      status: 200,
      statusText: 'Sucess'
    });

    expect(spy).toHaveBeenCalledWith('success');
    tick();
  }))
});
