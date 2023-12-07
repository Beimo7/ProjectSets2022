
import OrgChart from '@balkangraph/orgchart.js'
OrgChart.templates.base = {
  defs: '',
  size: [250, 120],
  expandCollapseSize: 30,
  linkAdjuster: {
      fromX: 0,
      fromY: 0,
      toX: 0,
      toY: 0
  },
  ripple: {
      radius: 0,
      color: "#e6e6e6",
  },
  assistanseLink: '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} {xd},{yd} L{xe},{ye}" />',
}