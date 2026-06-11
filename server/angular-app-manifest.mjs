
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angularHW1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/angularHW1/task-1",
    "route": "/angularHW1"
  },
  {
    "renderMode": 2,
    "route": "/angularHW1/task-1"
  },
  {
    "renderMode": 2,
    "route": "/angularHW1/task-2"
  },
  {
    "renderMode": 2,
    "route": "/angularHW1/task-3"
  },
  {
    "renderMode": 2,
    "route": "/angularHW1/task-4"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4988, hash: '63a650a89e98a27218e860b41a0cd3f49cb12bc9de147cedd69f0c9cf4de3bfa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: '27cf74d53c2814a099531d2f86028fe15e5d45813b1eeaf483bd178cd4cb73cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'task-3/index.html': {size: 8675, hash: '2f19b561c6e728b798ce6428d46aeb22f2cc43bcef836eeef8e2a2ed151a7074', text: () => import('./assets-chunks/task-3_index_html.mjs').then(m => m.default)},
    'task-2/index.html': {size: 7233, hash: '402d409d2290a786ebf40cb37edb9ef468cfdac395c2fc6dc0fa7ebda877e4fb', text: () => import('./assets-chunks/task-2_index_html.mjs').then(m => m.default)},
    'task-1/index.html': {size: 7392, hash: 'eab5313865e72162f3f59e5b01de02a0c9fcf0953ed40bf8821ec7ae60017b6e', text: () => import('./assets-chunks/task-1_index_html.mjs').then(m => m.default)},
    'task-4/index.html': {size: 9651, hash: 'd1bc3e37065885038feab38141a2fbb5a14e347f7e689b6c53bea3e381253fec', text: () => import('./assets-chunks/task-4_index_html.mjs').then(m => m.default)},
    'styles-JG7EAGFK.css': {size: 230853, hash: 'YlmivfEfBiI', text: () => import('./assets-chunks/styles-JG7EAGFK_css.mjs').then(m => m.default)}
  },
};
