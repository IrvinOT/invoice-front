import { Component } from '@angular/core';
import { AxiosService } from './utils/axios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  startDate: string = '01/01/2022';
  endDate: string = '01/12/2022';
  loading = false;
  error: string | null = null;
  results: any = null;
  page: number = 1;
  pageSize: number = 10;

  constructor(private axiosService: AxiosService) {}

  get paginatedData() {
    return this.results.data;
  }

  get totalPages(): number {
    return this.results?.total_pages || 1;
  }

  get totalRecords(): number {
    return this.results?.records || 1;
  }

  get first(): number {
    return (this.page - 1) * this.pageSize || 1;
  }

  get currentPage(): number {
    return this.results.page;
  }

  onStartDateChange(newValue: string) {
    this.startDate = newValue;
    this.endDate = '';
  }

  async onSubmit() {
    this.page = 1;
    this.getInvoices();
  }

  async onPageChange(e: any) {
    this.page = e.page + 1;
    this.pageSize = e.rows;
    this.getInvoices();
  }

  async getInvoices() {
    this.loading = true;
    this.error = null;
    this.results = null;
    try {
      // Cambia la URL y los parámetros según tu API
      const response = await this.axiosService.instance.get('/api/invoice', {
        params: {
          start_date: this.startDate,
          end_date: this.endDate,
          page: this.page,
          page_size: this.pageSize,
        },
      });
      this.results = response.data;
    } catch (err: any) {
      this.error = err.message || 'Error al consultar la API';
    } finally {
      this.loading = false;
    }
  }
}
