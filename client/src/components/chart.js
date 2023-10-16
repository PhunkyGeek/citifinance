import dynamic from 'next/dynamic';
import { styled } from '@material-ui/core';

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => null
});

export const Chart = styled(ApexChart)``;
