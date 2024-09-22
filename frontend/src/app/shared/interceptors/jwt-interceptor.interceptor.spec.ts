import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';
import { JwtInterceptor } from './jwt-interceptor.interceptor';

describe('JwtInterceptor', () => {
  let interceptor: JwtInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    interceptor = new JwtInterceptor();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should intercept requests', () => {
    const req = {};
    const next = {
      handle: (req: any) => {
        return { subscribe: (callback: any) => callback(req) };
      },
    };

    interceptor.intercept(req as any, next as any);
  });
});
