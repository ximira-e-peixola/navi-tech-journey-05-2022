const bla = {
  version: 8,
  id: 'cb229beb-70bc-49e1-afb6-3f1d8645f83f',
  name: 'My Streets',
  sources: {
    openmaptiles: {
      url: 'https://api.maptiler.com/tiles/v3-openmaptiles/tiles.json?key=qw0NmMu0bhRS7dDtV7ne',
      type: 'vector'
    },
    maptiler_attribution: {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      type: 'vector'
    }
  },
  layers: [
    {
      id: 'background',
      type: 'background',
      layout: {
        visibility: 'none'
      },
      paint: {
        'background-color': {
          stops: [
            [
              6,
              'rgba(252, 247, 229, 1)'
            ],
            [
              10,
              'rgba(252, 247, 229, 1)'
            ],
            [
              14,
              'rgba(246, 241, 229, 1)'
            ],
            [
              15,
              'rgba(246, 241, 229, 1)'
            ]
          ]
        }
      }
    },
    {
      id: 'landcover_cropland',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(243, 235, 195, 1)',
        'fill-opacity': {
          base: 1,
          stops: [
            [
              4,
              1
            ],
            [
              8,
              0
            ]
          ]
        }
      },
      filter: [
        'all',
        [
          '==',
          'class',
          'crop'
        ]
      ]
    },
    {
      id: 'landcover_grassland',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(226, 236, 197, 1)',
        'fill-opacity': {
          base: 1,
          stops: [
            [
              4,
              1
            ],
            [
              8,
              0
            ]
          ]
        }
      },
      filter: [
        'all',
        [
          '==',
          'class',
          'grass'
        ]
      ]
    },
    {
      id: 'landcover_scrubland',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(199, 230, 179, 1)',
        'fill-opacity': {
          base: 1,
          stops: [
            [
              4,
              1
            ],
            [
              8,
              0
            ]
          ]
        }
      },
      filter: [
        'all',
        [
          '==',
          'class',
          'scrub'
        ]
      ]
    },
    {
      id: 'landcover_treeland',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(190, 222, 173, 1)',
        'fill-opacity': {
          base: 1,
          stops: [
            [
              4,
              1
            ],
            [
              8,
              0
            ]
          ]
        }
      },
      filter: [
        'all',
        [
          '==',
          'class',
          'tree'
        ]
      ]
    },
    {
      id: 'landcover_forestland',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(171, 217, 170, 1)',
        'fill-opacity': {
          base: 1,
          stops: [
            [
              4,
              1
            ],
            [
              8,
              0
            ]
          ]
        }
      },
      filter: [
        'all',
        [
          '==',
          'class',
          'forest'
        ]
      ]
    },
    {
      id: 'landcover_snowland',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'globallandcover',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'hsl(0, 0%, 100%)',
        'fill-opacity': {
          base: 1,
          stops: [
            [
              4,
              1
            ],
            [
              8,
              0
            ]
          ]
        }
      },
      filter: [
        'all',
        [
          '==',
          'class',
          'snow'
        ]
      ]
    },
    {
      id: 'park_outline',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'park',
      minzoom: 9,
      layout: {
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(167, 203, 131, 1)',
        'line-width': {
          stops: [
            [
              9,
              0.5
            ],
            [
              14,
              2
            ]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [
          1,
          1.5
        ]
      },
      filter: [
        'all'
      ]
    },
    {
      id: 'landuse_residential',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'landuse',
      maxzoom: 24,
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': {
          base: 1,
          stops: [
            [
              9,
              'rgba(233, 227, 210, 0.80)'
            ],
            [
              12,
              'rgba(233, 227, 210, 0.55)'
            ],
            [
              16,
              'rgba(233, 227, 210, 0.35)'
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          'in',
          'class',
          'residential',
          'suburbs',
          'neighbourhood'
        ]
      ]
    },
    {
      id: 'landcover_wood',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'landcover',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'hsla(98, 61%, 72%, 0.7)',
        'fill-opacity': 0.4,
        'fill-antialias': false
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'wood'
        ]
      ]
    },
    {
      id: 'landcover_grass',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'landcover',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(224, 232, 201, 1)',
        'fill-opacity': 0.3,
        'fill-antialias': false
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'grass'
        ]
      ]
    },
    {
      id: 'landuse_cemetery',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'landuse',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'hsl(75, 37%, 81%)'
      },
      metadata: {},
      filter: [
        '==',
        'class',
        'cemetery'
      ]
    },
    {
      id: 'landuse_hospital',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'landuse',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(249, 225, 220, 1)'
      },
      metadata: {},
      filter: [
        '==',
        'class',
        'hospital'
      ]
    },
    {
      id: 'landuse_school',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'landuse',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgb(236,238,204)'
      },
      metadata: {},
      filter: [
        '==',
        'class',
        'school'
      ]
    },
    {
      id: 'landuse_stadium',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'landuse',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgb(236,238,204)'
      },
      metadata: {},
      filter: [
        'all',
        [
          'in',
          'class',
          'stadium',
          'pitch',
          'track'
        ]
      ]
    },
    {
      id: 'landuse_garage',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'landuse',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(236, 236, 236, 1)'
      },
      metadata: {},
      filter: [
        'all',
        [
          'in',
          'class',
          'garages'
        ]
      ]
    },
    {
      id: 'landuse_dam',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'landuse',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(209, 212, 190, 1)'
      },
      metadata: {},
      filter: [
        'all',
        [
          'in',
          'class',
          'dam'
        ]
      ]
    },
    {
      id: 'waterway_tunnel',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'waterway',
      minzoom: 14,
      layout: {
        'line-cap': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': '#a0c8f0',
        'line-width': {
          base: 1.3,
          stops: [
            [
              13,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        },
        'line-dasharray': [
          2,
          4
        ]
      },
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ]
      ]
    },
    {
      id: 'waterway_river',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'waterway',
      layout: {
        'line-cap': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': '#a0c8f0',
        'line-width': {
          base: 1.2,
          stops: [
            [
              11,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'river'
        ],
        [
          '!=',
          'brunnel',
          'tunnel'
        ],
        [
          '!=',
          'intermittent',
          1
        ]
      ]
    },
    {
      id: 'waterway_river_intermittent',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'waterway',
      layout: {
        'line-cap': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': '#a0c8f0',
        'line-width': {
          base: 1.2,
          stops: [
            [
              11,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        },
        'line-dasharray': [
          3,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'river'
        ],
        [
          '!=',
          'brunnel',
          'tunnel'
        ],
        [
          '==',
          'intermittent',
          1
        ]
      ]
    },
    {
      id: 'waterway_other',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'waterway',
      layout: {
        'line-cap': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': '#a0c8f0',
        'line-width': {
          base: 1.3,
          stops: [
            [
              13,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!=',
          'class',
          'river'
        ],
        [
          '!=',
          'brunnel',
          'tunnel'
        ],
        [
          '!=',
          'intermittent',
          1
        ]
      ]
    },
    {
      id: 'waterway_other_intermittent',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'waterway',
      layout: {
        'line-cap': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': '#a0c8f0',
        'line-width': {
          base: 1.3,
          stops: [
            [
              13,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        },
        'line-dasharray': [
          4,
          3
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '!=',
          'class',
          'river'
        ],
        [
          '!=',
          'brunnel',
          'tunnel'
        ],
        [
          '==',
          'intermittent',
          1
        ]
      ]
    },
    {
      id: 'water_intermittent',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'water',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(172, 218, 251, 1)',
        'fill-opacity': 0.85
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'intermittent',
          1
        ]
      ]
    },
    {
      id: 'water',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'water',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(134, 204, 250, 1)'
      },
      metadata: {},
      filter: [
        'all',
        [
          '!=',
          'intermittent',
          1
        ],
        [
          '!=',
          'brunnel',
          'tunnel'
        ]
      ]
    },
    {
      id: 'landcover_sand',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'landcover',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': '#f2e9ac',
        'fill-opacity': 1,
        'fill-antialias': false
      },
      metadata: {},
      filter: [
        'all',
        [
          'in',
          'class',
          'sand'
        ]
      ]
    },
    {
      id: 'landcover_sand_outline',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'landcover',
      layout: {
        visibility: 'none'
      },
      paint: {
        'line-color': '#f2e9ac',
        'line-width': 2
      },
      metadata: {},
      filter: [
        'all',
        [
          'in',
          'class',
          'sand'
        ]
      ]
    },
    {
      id: 'aeroway_fill',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'aeroway',
      minzoom: 11,
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(229, 228, 224, 1)',
        'fill-opacity': 0.7
      },
      metadata: {},
      filter: [
        '==',
        '$type',
        'Polygon'
      ]
    },
    {
      id: 'aeroway_runway',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'aeroway',
      minzoom: 11,
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': '#f0ede9',
        'line-width': {
          base: 1.2,
          stops: [
            [
              11,
              3
            ],
            [
              20,
              16
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          '==',
          'class',
          'runway'
        ]
      ]
    },
    {
      id: 'aeroway_taxiway',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'aeroway',
      minzoom: 11,
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': '#f0ede9',
        'line-width': {
          base: 1.2,
          stops: [
            [
              11,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          '==',
          'class',
          'taxiway'
        ]
      ]
    },
    {
      id: 'ferry',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(108, 159, 182, 1)',
        'line-width': 1.1,
        'line-dasharray': [
          2,
          2
        ]
      },
      filter: [
        'all',
        [
          'in',
          'class',
          'ferry'
        ]
      ]
    },
    {
      id: 'tunnel_motorway_link_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [
          0.5,
          0.25
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'motorway'
        ],
        [
          '==',
          'ramp',
          1
        ],
        [
          '==',
          'brunnel',
          'tunnel'
        ]
      ]
    },
    {
      id: 'tunnel_service_track_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#cfcdca',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              0.5
            ],
            [
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              11
            ]
          ]
        },
        'line-dasharray': [
          0.5,
          0.25
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'service',
          'track'
        ]
      ]
    },
    {
      id: 'tunnel_link_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'ramp',
          '1'
        ],
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          '>',
          'layer',
          0
        ]
      ]
    },
    {
      id: 'tunnel_minor_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#cfcdca',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              0.5
            ],
            [
              13,
              1.5
            ],
            [
              14,
              4
            ],
            [
              20,
              16
            ]
          ]
        },
        'line-dasharray': [
          0.5,
          0.25
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          '==',
          'class',
          'minor'
        ]
      ]
    },
    {
      id: 'tunnel_street_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#cfcdca',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              0.5
            ],
            [
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        },
        'line-opacity': {
          stops: [
            [
              12,
              0
            ],
            [
              12.5,
              1
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'street',
          'street_limited'
        ]
      ]
    },
    {
      id: 'tunnel_secondary_tertiary_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'rgba(195, 189, 187, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              8,
              1.5
            ],
            [
              20,
              17
            ]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [
          0.5,
          0.25
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'secondary',
          'tertiary'
        ]
      ]
    },
    {
      id: 'tunnel_trunk_primary_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        },
        'line-dasharray': [
          0.5,
          0.25
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'primary',
          'trunk'
        ]
      ]
    },
    {
      id: 'tunnel_motorway_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        },
        'line-dasharray': [
          0.5,
          0.25
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'motorway'
        ],
        [
          '==',
          'brunnel',
          'tunnel'
        ]
      ]
    },
    {
      id: 'tunnel_path_pedestrian',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': 'rgba(204, 196, 176, 0.45)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              14,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        },
        'line-dasharray': [
          1,
          0.75
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'path',
          'pedestrian'
        ]
      ]
    },
    {
      id: 'tunnel_motorway_link',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fc8',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'motorway_link'
        ],
        [
          '==',
          'ramp',
          1
        ],
        [
          '==',
          'brunnel',
          'tunnel'
        ]
      ]
    },
    {
      id: 'tunnel_service_track',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              13,
              1.5
            ],
            [
              16,
              2
            ],
            [
              20,
              8
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'service',
          'track'
        ]
      ]
    },
    {
      id: 'tunnel_service_track_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              13,
              1.5
            ],
            [
              16,
              2
            ],
            [
              20,
              8
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'service_construction',
          'track_construction'
        ]
      ]
    },
    {
      id: 'tunnel_link',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff4c6',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'ramp',
          '1'
        ],
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          '>',
          'layer',
          0
        ]
      ]
    },
    {
      id: 'tunnel_minor',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12.9,
              0
            ],
            [
              13,
              1
            ],
            [
              14,
              2.5
            ],
            [
              20,
              13
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'minor'
        ]
      ]
    },
    {
      id: 'tunnel_minor_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12.9,
              0
            ],
            [
              13,
              1
            ],
            [
              14,
              2.5
            ],
            [
              20,
              13
            ]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'minor_construction'
        ]
      ]
    },
    {
      id: 'tunnel_secondary_tertiary',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'rgba(245, 245, 243, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              6.5,
              0
            ],
            [
              8,
              0.5
            ],
            [
              20,
              13
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'secondary',
          'tertiary'
        ]
      ]
    },
    {
      id: 'tunnel_secondary_tertiary_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              6.5,
              0
            ],
            [
              8,
              0.5
            ],
            [
              20,
              13
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'secondary_construction',
          'tertiary_construction'
        ]
      ]
    },
    {
      id: 'tunnel_trunk_primary',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff4c6',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'primary',
          'trunk'
        ]
      ]
    },
    {
      id: 'tunnel_trunk_primary_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff4c6',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'primary_construction',
          'trunk_construction'
        ]
      ]
    },
    {
      id: 'tunnel_motorway',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#ffdaa6',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'motorway'
        ],
        [
          '==',
          'brunnel',
          'tunnel'
        ]
      ]
    },
    {
      id: 'tunnel_motorway_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#ffdaa6',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'motorway_construction'
        ],
        [
          '==',
          'brunnel',
          'tunnel'
        ]
      ]
    },
    {
      id: 'tunnel_major_rail',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          'in',
          'class',
          'rail'
        ]
      ]
    },
    {
      id: 'tunnel_major_rail_hatching',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        },
        'line-dasharray': [
          0.2,
          8
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'tunnel'
        ],
        [
          '==',
          'class',
          'rail'
        ]
      ]
    },
    {
      id: 'road_area_pier',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(246, 241, 229, 1)',
        'fill-antialias': true
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'Polygon'
        ],
        [
          '==',
          'class',
          'pier'
        ]
      ]
    },
    {
      id: 'road_pier',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(246, 241, 229, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              15,
              1
            ],
            [
              17,
              4
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          'in',
          'class',
          'pier'
        ]
      ]
    },
    {
      id: 'road_area_bridge',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(246, 241, 229, 0.6)',
        'fill-antialias': true
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'Polygon'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ]
      ]
    },
    {
      id: 'road_area_pattern',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-pattern': 'pedestrian_polygon'
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'Polygon'
        ],
        [
          '!has',
          'brunnel'
        ],
        [
          '!in',
          'class',
          'bridge',
          'pier'
        ]
      ]
    },
    {
      id: 'road_service_track_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#cfcdca',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              0.5
            ],
            [
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              11
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'class',
          'service',
          'track'
        ]
      ]
    },
    {
      id: 'road_link_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 13,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '!in',
          'class',
          'motorway',
          'trunk',
          'primary',
          'pedestrian',
          'path',
          'track',
          'service'
        ],
        [
          '==',
          'ramp',
          1
        ]
      ]
    },
    {
      id: 'road_trunk_primary_link_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'butt',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              0.7
            ],
            [
              20,
              14
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '==',
          'ramp',
          1
        ],
        [
          'in',
          'class',
          'primary',
          'trunk'
        ]
      ]
    },
    {
      id: 'road_motorway_link_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 10,
      layout: {
        'line-cap': 'butt',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              9.9,
              0
            ],
            [
              10,
              1.4
            ],
            [
              14,
              8
            ],
            [
              20,
              12
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '==',
          'class',
          'motorway'
        ],
        [
          '==',
          'ramp',
          1
        ]
      ]
    },
    {
      id: 'road_minor_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#cfcdca',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              0.7
            ],
            [
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              16
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'class',
          'minor'
        ],
        [
          '!=',
          'ramp',
          '1'
        ]
      ]
    },
    {
      id: 'road_secondary_tertiary_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'rgba(195, 189, 187, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              8,
              1.5
            ],
            [
              20,
              17
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'class',
          'secondary',
          'tertiary'
        ],
        [
          '!=',
          'ramp',
          1
        ]
      ]
    },
    {
      id: 'road_trunk_primary_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'butt',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '!=',
          'ramp',
          1
        ],
        [
          'in',
          'class',
          'primary',
          'trunk'
        ],
        [
          '!=',
          'ramp',
          1
        ]
      ]
    },
    {
      id: 'road_motorway_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-cap': 'butt',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '==',
          'class',
          'motorway'
        ],
        [
          '!=',
          'ramp',
          1
        ]
      ]
    },
    {
      id: 'road_path_pedestrian',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 12,
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'rgba(176, 169, 150, 0.45)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              1
            ],
            [
              16,
              2
            ],
            [
              20,
              3
            ]
          ]
        },
        'line-dasharray': [
          1,
          1
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'class',
          'path',
          'pedestrian'
        ]
      ]
    },
    {
      id: 'road_link',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 13,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '==',
          'ramp',
          1
        ],
        [
          '!in',
          'class',
          'motorway',
          'trunk',
          'primary',
          'pedestrian',
          'path',
          'track',
          'service'
        ]
      ]
    },
    {
      id: 'road_trunk_primary_link',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              10
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '==',
          'ramp',
          1
        ],
        [
          'in',
          'class',
          'primary',
          'trunk'
        ]
      ]
    },
    {
      id: 'road_motorway_link',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 10,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fc8',
        'line-width': {
          base: 1.2,
          stops: [
            [
              9.9,
              0
            ],
            [
              10,
              1
            ],
            [
              14,
              6
            ],
            [
              20,
              10
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '==',
          'class',
          'motorway'
        ],
        [
          '==',
          'ramp',
          1
        ]
      ]
    },
    {
      id: 'road_service_track',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 13,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'rgba(255, 255, 255, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              13,
              1.5
            ],
            [
              16,
              2
            ],
            [
              20,
              8
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'class',
          'service',
          'track'
        ]
      ]
    },
    {
      id: 'road_service_track_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 13,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              13,
              1.5
            ],
            [
              16,
              2
            ],
            [
              20,
              8
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'class',
          'service_construction',
          'track_construction'
        ]
      ]
    },
    {
      id: 'road_minor',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12.9,
              0
            ],
            [
              13,
              1
            ],
            [
              14,
              2.5
            ],
            [
              20,
              13
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          'all',
          [
            '!in',
            'brunnel',
            'bridge',
            'tunnel'
          ],
          [
            'in',
            'class',
            'minor'
          ]
        ]
      ]
    },
    {
      id: 'road_minor_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              14,
              2.5
            ],
            [
              20,
              18
            ]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          'all',
          [
            '!in',
            'brunnel',
            'bridge',
            'tunnel'
          ],
          [
            'in',
            'class',
            'minor_construction'
          ]
        ]
      ]
    },
    {
      id: 'road_secondary_tertiary',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'rgba(245, 245, 243, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              6.5,
              0
            ],
            [
              8,
              0.5
            ],
            [
              20,
              13
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'class',
          'secondary',
          'tertiary'
        ]
      ]
    },
    {
      id: 'road_secondary_tertiary_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              6.5,
              0
            ],
            [
              8,
              0.5
            ],
            [
              20,
              13
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'class',
          'secondary_construction',
          'tertiary_construction'
        ]
      ]
    },
    {
      id: 'road_trunk_primary',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '!=',
          'ramp',
          1
        ],
        [
          'in',
          'class',
          'primary',
          'trunk'
        ]
      ]
    },
    {
      id: 'road_trunk_primary_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '!=',
          'ramp',
          1
        ],
        [
          'in',
          'class',
          'primary_construction',
          'trunk_construction'
        ]
      ]
    },
    {
      id: 'road_motorway',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': {
          base: 1,
          stops: [
            [
              5,
              'hsl(26, 87%, 62%)'
            ],
            [
              6,
              '#fc8'
            ]
          ]
        },
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '==',
          'class',
          'motorway'
        ],
        [
          '!=',
          'ramp',
          1
        ]
      ]
    },
    {
      id: 'road_motorway_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': {
          base: 1,
          stops: [
            [
              5,
              'hsl(26, 87%, 62%)'
            ],
            [
              6,
              '#fc8'
            ]
          ]
        },
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '==',
          'class',
          'motorway_construction'
        ],
        [
          '!=',
          'ramp',
          1
        ]
      ]
    },
    {
      id: 'road_major_rail',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'class',
          'rail'
        ]
      ]
    },
    {
      id: 'road_major_rail_hatching',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        },
        'line-dasharray': [
          0.2,
          8
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          '==',
          'class',
          'rail'
        ]
      ]
    },
    {
      id: 'road_minor_rail',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'subclass',
          'tram',
          'light_rail'
        ]
      ]
    },
    {
      id: 'road_minor_rail_hatching',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [
              14.5,
              0
            ],
            [
              15,
              2
            ],
            [
              20,
              6
            ]
          ]
        },
        'line-dasharray': [
          0.2,
          4
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'subclass',
          'tram',
          'light_rail'
        ]
      ]
    },
    {
      id: 'building',
      type: 'fill',
      source: 'openmaptiles',
      'source-layer': 'building',
      minzoom: 13,
      maxzoom: 14,
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-color': 'rgba(189, 185, 181, 0.3)',
        'fill-outline-color': {
          base: 1,
          stops: [
            [
              13,
              'hsla(35, 6%, 79%, 0.32)'
            ],
            [
              14,
              'hsl(35, 6%, 79%)'
            ]
          ]
        }
      },
      metadata: {}
    },
    {
      id: 'building-3d',
      type: 'fill-extrusion',
      source: 'openmaptiles',
      'source-layer': 'building',
      minzoom: 14,
      layout: {
        visibility: 'none'
      },
      paint: {
        'fill-extrusion-base': {
          type: 'identity',
          property: 'render_min_height'
        },
        'fill-extrusion-color': 'rgba(189, 185, 181, 1)',
        'fill-extrusion-height': {
          type: 'identity',
          property: 'render_height'
        },
        'fill-extrusion-opacity': 0.3
      },
      metadata: {},
      filter: [
        'all',
        [
          '!has',
          'hide_3d'
        ]
      ]
    },
    {
      id: 'waterway-bridge-case',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'waterway',
      layout: {
        'line-cap': 'butt',
        'line-join': 'miter',
        visibility: 'none'
      },
      paint: {
        'line-color': '#bbbbbb',
        'line-width': {
          base: 1.6,
          stops: [
            [
              12,
              0.5
            ],
            [
              20,
              5
            ]
          ]
        },
        'line-gap-width': {
          base: 1.3,
          stops: [
            [
              13,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        }
      },
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ]
      ]
    },
    {
      id: 'waterway-bridge',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'waterway',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(134, 204, 250, 1)',
        'line-width': {
          base: 1.3,
          stops: [
            [
              13,
              0.5
            ],
            [
              20,
              6
            ]
          ]
        }
      },
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ]
      ]
    },
    {
      id: 'bridge_motorway_link_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              9.9,
              0
            ],
            [
              10,
              1.4
            ],
            [
              14,
              8
            ],
            [
              20,
              12
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'motorway'
        ],
        [
          '==',
          'ramp',
          1
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ]
      ]
    },
    {
      id: 'bridge_service_track_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#cfcdca',
        'line-width': {
          base: 1.2,
          stops: [
            [
              13,
              1.5
            ],
            [
              20,
              11
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'service',
          'track'
        ]
      ]
    },
    {
      id: 'bridge_link_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'link'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ]
      ]
    },
    {
      id: 'bridge_street_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'hsl(36, 6%, 74%)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              0.5
            ],
            [
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              18
            ]
          ]
        },
        'line-opacity': {
          stops: [
            [
              12,
              0
            ],
            [
              12.5,
              1
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'street',
          'street_limited'
        ]
      ]
    },
    {
      id: 'bridge_path_pedestrian_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'miter',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'hsl(35, 6%, 80%)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              14,
              1.5
            ],
            [
              20,
              18
            ]
          ]
        },
        'line-dasharray': [
          1,
          0
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'path',
          'pedestrian'
        ]
      ]
    },
    {
      id: 'bridge_minor_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-cap': 'butt',
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#cfcdca',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12,
              0.7
            ],
            [
              13,
              1
            ],
            [
              14,
              4
            ],
            [
              20,
              16
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          'in',
          'brunnel',
          'bridge',
          'tunnel'
        ],
        [
          'in',
          'class',
          'minor'
        ],
        [
          '!=',
          'ramp',
          '1'
        ]
      ]
    },
    {
      id: 'bridge_secondary_tertiary_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'rgba(195, 189, 187, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              8,
              1.5
            ],
            [
              20,
              17
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'secondary',
          'tertiary'
        ]
      ]
    },
    {
      id: 'bridge_trunk_primary_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'primary',
          'trunk'
        ]
      ]
    },
    {
      id: 'bridge_motorway_casing',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#e9ac77',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0.4
            ],
            [
              6,
              0.7
            ],
            [
              7,
              1.75
            ],
            [
              20,
              22
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'motorway'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          '!=',
          'ramp',
          1
        ]
      ]
    },
    {
      id: 'bridge_path_pedestrian',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': 'hsl(0, 0%, 100%)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              14,
              0.5
            ],
            [
              20,
              10
            ]
          ]
        },
        'line-dasharray': [
          1,
          0.3
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'path',
          'pedestrian'
        ]
      ]
    },
    {
      id: 'bridge_motorway_link',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fc8',
        'line-width': {
          base: 1.2,
          stops: [
            [
              9.9,
              0
            ],
            [
              10,
              1
            ],
            [
              14,
              6
            ],
            [
              20,
              10
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'motorway'
        ],
        [
          '==',
          'ramp',
          1
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ]
      ]
    },
    {
      id: 'bridge_service_track',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              13,
              1.5
            ],
            [
              16,
              2
            ],
            [
              20,
              8
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'service',
          'track'
        ]
      ]
    },
    {
      id: 'bridge_service_track_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              13,
              1.5
            ],
            [
              16,
              2
            ],
            [
              20,
              8
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'service_construction',
          'track_construction'
        ]
      ]
    },
    {
      id: 'bridge_link',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'link'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ]
      ]
    },
    {
      id: 'bridge_street',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              13.5,
              0
            ],
            [
              14,
              2.5
            ],
            [
              20,
              16
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'street',
          'street_limited'
        ]
      ]
    },
    {
      id: 'bridge_minor',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12.9,
              0
            ],
            [
              13,
              1
            ],
            [
              14,
              2.5
            ],
            [
              20,
              13
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'minor'
        ]
      ]
    },
    {
      id: 'bridge_minor_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              12.9,
              0
            ],
            [
              13,
              1
            ],
            [
              14,
              2.5
            ],
            [
              20,
              13
            ]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'minor_construction'
        ]
      ]
    },
    {
      id: 'bridge_secondary_tertiary',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'rgba(245, 245, 243, 1)',
        'line-width': {
          base: 1.2,
          stops: [
            [
              6.5,
              0
            ],
            [
              8,
              0.5
            ],
            [
              20,
              13
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'secondary',
          'tertiary'
        ]
      ]
    },
    {
      id: 'bridge_secondary_tertiary_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fff',
        'line-width': {
          base: 1.2,
          stops: [
            [
              6.5,
              0
            ],
            [
              8,
              0.5
            ],
            [
              20,
              13
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'secondary_construction',
          'tertiary_construction'
        ]
      ]
    },
    {
      id: 'bridge_trunk_primary',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'primary',
          'trunk'
        ]
      ]
    },
    {
      id: 'bridge_trunk_primary_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fea',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          'in',
          'class',
          'primary_construction',
          'trunk_construction'
        ]
      ]
    },
    {
      id: 'bridge_motorway',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fc8',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'motorway'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          '!=',
          'ramp',
          1
        ]
      ]
    },
    {
      id: 'bridge_motorway_construction',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 5,
      layout: {
        'line-join': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': '#fc8',
        'line-width': {
          base: 1.2,
          stops: [
            [
              5,
              0
            ],
            [
              7,
              1
            ],
            [
              20,
              18
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'motorway_construction'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ],
        [
          '!=',
          'ramp',
          1
        ]
      ]
    },
    {
      id: 'bridge_major_rail',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [
              14,
              0.4
            ],
            [
              15,
              0.75
            ],
            [
              20,
              2
            ]
          ]
        }
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'rail'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ]
      ]
    },
    {
      id: 'bridge_major_rail_hatching',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      layout: {
        visibility: 'visible'
      },
      paint: {
        'line-color': '#bbb',
        'line-width': {
          base: 1.4,
          stops: [
            [
              14.5,
              0
            ],
            [
              15,
              3
            ],
            [
              20,
              8
            ]
          ]
        },
        'line-dasharray': [
          0.2,
          8
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'rail'
        ],
        [
          '==',
          'brunnel',
          'bridge'
        ]
      ]
    },
    {
      id: 'cablecar',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 13,
      layout: {
        'line-cap': 'round',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'hsl(0, 0%, 70%)',
        'line-width': {
          base: 1,
          stops: [
            [
              13,
              1
            ],
            [
              19,
              2
            ]
          ]
        }
      },
      filter: [
        '==',
        'class',
        'aerialway'
      ]
    },
    {
      id: 'cablecar-dash',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 13,
      layout: {
        'line-cap': 'round',
        'line-join': 'bevel',
        visibility: 'visible'
      },
      paint: {
        'line-color': 'rgba(164, 164, 164, 1)',
        'line-width': {
          base: 1,
          stops: [
            [
              13,
              2
            ],
            [
              19,
              4
            ]
          ]
        },
        'line-dasharray': [
          2,
          2
        ]
      },
      filter: [
        '==',
        'class',
        'aerialway'
      ]
    },
    {
      id: 'boundary_3',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 3,
      layout: {
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': '#9e9cab',
        'line-width': {
          base: 1,
          stops: [
            [
              4,
              0.4
            ],
            [
              5,
              0.7
            ],
            [
              12,
              1.6
            ]
          ]
        },
        'line-dasharray': [
          5,
          3
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          'in',
          'admin_level',
          3,
          4
        ],
        [
          '==',
          'maritime',
          0
        ]
      ]
    },
    {
      id: 'boundary_2_z0-4',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 0,
      maxzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(139, 139, 139, 1)',
        'line-width': {
          base: 1,
          stops: [
            [
              3,
              1
            ],
            [
              5,
              1.2
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '==',
          'maritime',
          0
        ],
        [
          '==',
          'disputed',
          0
        ],
        [
          '!has',
          'claimed_by'
        ]
      ]
    },
    {
      id: 'boundary_2_z0-4_maritime',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 0,
      maxzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(98,185,229,1)',
        'line-width': {
          base: 1,
          stops: [
            [
              3,
              1
            ],
            [
              5,
              1.2
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '!has',
          'claimed_by'
        ],
        [
          '==',
          'disputed',
          0
        ],
        [
          '==',
          'maritime',
          1
        ]
      ]
    },
    {
      id: 'boundary_2_z0-4_disputed',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 0,
      maxzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(139, 139, 139, 1)',
        'line-width': {
          base: 1,
          stops: [
            [
              3,
              1
            ],
            [
              5,
              1.2
            ]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [
          3,
          3
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '==',
          'maritime',
          0
        ],
        [
          '==',
          'disputed',
          1
        ],
        [
          '!has',
          'claimed_by'
        ]
      ]
    },
    {
      id: 'boundary_2_z0-4_disputed-undisputed',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 0,
      maxzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(139, 139, 139, 1)',
        'line-width': {
          base: 1,
          stops: [
            [
              3,
              1
            ],
            [
              5,
              1.2
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '==',
          'maritime',
          0
        ],
        [
          '==',
          'disputed',
          1
        ],
        [
          '!has',
          'claimed_by'
        ],
        [
          '==',
          'claimed_by',
          'BT'
        ]
      ]
    },
    {
      id: 'boundary_2_z0-4_disputed_maritime',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 0,
      maxzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(98,185,229,1)',
        'line-width': {
          base: 1,
          stops: [
            [
              3,
              1
            ],
            [
              5,
              1.2
            ]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [
          3,
          3
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '!has',
          'claimed_by'
        ],
        [
          '==',
          'maritime',
          1
        ],
        [
          '==',
          'disputed',
          1
        ]
      ]
    },
    {
      id: 'boundary_2_z0-4_disputed_maritime-undisputed',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 0,
      maxzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(98,185,229,1)',
        'line-width': {
          base: 1,
          stops: [
            [
              3,
              1
            ],
            [
              5,
              1.2
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '!has',
          'claimed_by'
        ],
        [
          '==',
          'maritime',
          1
        ],
        [
          '==',
          'disputed',
          1
        ],
        [
          '==',
          'claimed_by',
          'BT'
        ]
      ]
    },
    {
      id: 'boundary_2_z5',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(139, 139, 139, 1)',
        'line-width': {
          base: 1,
          stops: [
            [
              5,
              1.2
            ],
            [
              12,
              3
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '==',
          'disputed',
          0
        ],
        [
          '==',
          'maritime',
          0
        ]
      ]
    },
    {
      id: 'boundary_2_z5_disputed',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(120, 120, 120, 1)',
        'line-width': {
          base: 1,
          stops: [
            [
              5,
              1.2
            ],
            [
              12,
              3
            ]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [
          4,
          3
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '==',
          'disputed',
          1
        ],
        [
          '==',
          'maritime',
          0
        ]
      ]
    },
    {
      id: 'boundary_2_z5_disputed-undisputed',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(120, 120, 120, 1)',
        'line-width': {
          base: 1,
          stops: [
            [
              5,
              1.2
            ],
            [
              12,
              3
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '==',
          'disputed',
          1
        ],
        [
          '==',
          'maritime',
          0
        ],
        [
          '==',
          'claimed_by',
          'BT'
        ]
      ]
    },
    {
      id: 'boundary_2_z5_disputed_maritime',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(98,185,229,1)',
        'line-width': {
          base: 1,
          stops: [
            [
              5,
              1.2
            ],
            [
              12,
              3
            ]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [
          4,
          3
        ]
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '==',
          'disputed',
          1
        ],
        [
          '==',
          'maritime',
          1
        ]
      ]
    },
    {
      id: 'boundary_2_z5_disputed_maritime-undisputed',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(98,185,229,1)',
        'line-width': {
          base: 1,
          stops: [
            [
              5,
              1.2
            ],
            [
              12,
              3
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '==',
          'disputed',
          1
        ],
        [
          '==',
          'maritime',
          1
        ],
        [
          '==',
          'claimed_by',
          'BT'
        ]
      ]
    },
    {
      id: 'boundary_2_z5_maritime',
      type: 'line',
      source: 'openmaptiles',
      'source-layer': 'boundary',
      minzoom: 5,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
        visibility: 'none'
      },
      paint: {
        'line-color': 'rgba(98,185,229,1)',
        'line-width': {
          base: 1,
          stops: [
            [
              5,
              1.2
            ],
            [
              12,
              3
            ]
          ]
        },
        'line-opacity': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'admin_level',
          2
        ],
        [
          '==',
          'disputed',
          0
        ],
        [
          '==',
          'maritime',
          1
        ]
      ]
    },
    {
      id: 'water_name_line',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'water_name',
      minzoom: 0,
      layout: {
        'text-font': [
          'Roboto Regular',
          'Noto Sans Regular'
        ],
        'text-size': 12,
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          ' ',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'none',
        'text-max-width': 5,
        'symbol-placement': 'line'
      },
      paint: {
        'text-color': '#5d60be',
        'text-halo-color': 'rgba(255,255,255,0.7)',
        'text-halo-width': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'LineString'
        ]
      ]
    },
    {
      id: 'water_name_point',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'water_name',
      minzoom: 2,
      maxzoom: 24,
      layout: {
        'text-font': [
          'Roboto Regular',
          'Noto Sans Regular'
        ],
        'text-size': 12,
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'none',
        'text-max-width': 5
      },
      paint: {
        'text-color': 'rgba(76, 125, 173, 1)',
        'text-halo-color': 'rgba(255,255,255,0)',
        'text-halo-width': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'Point'
        ],
        [
          '!=',
          'class',
          'ocean'
        ]
      ]
    },
    {
      id: 'water_ocean_name_point',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'water_name',
      minzoom: 0,
      layout: {
        'text-font': [
          'Roboto Regular',
          'Noto Sans Regular'
        ],
        'text-size': 12,
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'none',
        'text-max-width': 5
      },
      paint: {
        'text-color': 'rgba(76, 125, 173, 1)',
        'text-halo-color': 'rgba(255,255,255,0)',
        'text-halo-width': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'Point'
        ],
        [
          '==',
          'class',
          'ocean'
        ]
      ]
    },
    {
      id: 'poi_z16_subclass',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'poi',
      minzoom: 16,
      layout: {
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': 12,
        'icon-image': '{subclass}_11',
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'visible',
        'text-anchor': 'top',
        'text-offset': [
          0,
          0.6
        ],
        'text-padding': 2,
        'text-max-width': 9
      },
      paint: {
        'text-color': '#666',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'Point'
        ],
        [
          '>=',
          'rank',
          20
        ],
        [
          'any',
          [
            'all',
            [
              'in',
              'class',
              'pitch'
            ],
            [
              'in',
              'subclass',
              'soccer',
              'tennis',
              'baseball',
              'basketball',
              'swimming',
              'golf'
            ]
          ]
        ],
        [
          'any',
          [
            '!has',
            'level'
          ],
          [
            '==',
            'level',
            0
          ]
        ]
      ]
    },
    {
      id: 'poi_z16',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'poi',
      minzoom: 16,
      layout: {
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': 12,
        'icon-image': '{class}_11',
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'visible',
        'text-anchor': 'top',
        'text-offset': [
          0,
          0.6
        ],
        'text-padding': 2,
        'text-max-width': 9
      },
      paint: {
        'text-color': '#666',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'Point'
        ],
        [
          '!=',
          'class',
          'swimming_pool'
        ],
        [
          '>=',
          'rank',
          20
        ],
        [
          'none',
          [
            'all',
            [
              'in',
              'class',
              'pitch'
            ],
            [
              'in',
              'subclass',
              'soccer',
              'tennis',
              'baseball',
              'basketball',
              'swimming',
              'golf'
            ]
          ]
        ],
        [
          'any',
          [
            '!has',
            'level'
          ],
          [
            '==',
            'level',
            0
          ]
        ]
      ]
    },
    {
      id: 'poi_z15',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'poi',
      minzoom: 15,
      layout: {
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': 12,
        'icon-image': '{class}_11',
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'visible',
        'text-anchor': 'top',
        'text-offset': [
          0,
          0.6
        ],
        'text-padding': 2,
        'text-max-width': 9
      },
      paint: {
        'text-color': '#666',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'Point'
        ],
        [
          '!=',
          'class',
          'swimming_pool'
        ],
        [
          '>=',
          'rank',
          7
        ],
        [
          '<',
          'rank',
          20
        ],
        [
          'any',
          [
            '!has',
            'level'
          ],
          [
            '==',
            'level',
            0
          ]
        ]
      ]
    },
    {
      id: 'poi_z14',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'poi',
      minzoom: 14.2,
      layout: {
        'icon-size': 0.9,
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': 12,
        'icon-image': '{class}_11',
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'visible',
        'text-anchor': 'top',
        'text-offset': [
          0,
          0.6
        ],
        'text-padding': 2,
        'text-max-width': 9
      },
      paint: {
        'text-color': '#666',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          '$type',
          'Point'
        ],
        [
          '!=',
          'class',
          'swimming_pool'
        ],
        [
          'any',
          [
            '<',
            'rank',
            7
          ]
        ],
        [
          'any',
          [
            '!has',
            'level'
          ],
          [
            '==',
            'level',
            0
          ]
        ]
      ]
    },
    {
      id: 'poi_transit',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'poi',
      minzoom: 15,
      layout: {
        'icon-size': 0.9,
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': 12,
        'icon-image': '{class}_11',
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'visible',
        'text-anchor': 'left',
        'text-offset': [
          0.9,
          0
        ],
        'text-padding': 2,
        'text-max-width': 9
      },
      paint: {
        'text-color': 'rgba(102, 102, 102, 1)',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          'in',
          'class',
          'bus',
          'railway',
          'airport'
        ],
        [
          '==',
          'subclass',
          'station'
        ]
      ]
    },
    {
      id: 'road_oneway',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 15,
      layout: {
        'icon-size': {
          stops: [
            [
              15,
              0.5
            ],
            [
              19,
              1
            ]
          ]
        },
        'icon-image': 'oneway',
        visibility: 'visible',
        'icon-rotate': 90,
        'icon-padding': 2,
        'symbol-spacing': 75,
        'symbol-placement': 'line',
        'icon-rotation-alignment': 'map'
      },
      paint: {
        'icon-opacity': 0.5
      },
      filter: [
        'all',
        [
          '==',
          'oneway',
          1
        ],
        [
          'in',
          'class',
          'motorway',
          'trunk',
          'primary',
          'secondary',
          'tertiary',
          'minor',
          'service'
        ]
      ]
    },
    {
      id: 'road_oneway_opposite',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'transportation',
      minzoom: 15,
      layout: {
        'icon-size': {
          stops: [
            [
              15,
              0.5
            ],
            [
              19,
              1
            ]
          ]
        },
        'icon-image': 'oneway',
        'icon-rotate': -90,
        'icon-padding': 2,
        'symbol-spacing': 75,
        'symbol-placement': 'line',
        'icon-rotation-alignment': 'map',
        visibility: 'visible'
      },
      paint: {
        'icon-opacity': 0.5
      },
      filter: [
        'all',
        [
          '==',
          'oneway',
          -1
        ],
        [
          'in',
          'class',
          'motorway',
          'trunk',
          'primary',
          'secondary',
          'tertiary',
          'minor',
          'service'
        ]
      ]
    },
    {
      id: 'road_gondola_label',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'transportation_name',
      minzoom: 13,
      layout: {
        'text-font': [
          'Roboto Italic',
          'Noto Sans Italic'
        ],
        'text-size': {
          base: 1,
          stops: [
            [
              13,
              11
            ],
            [
              15,
              12
            ]
          ]
        },
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          ' ',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        'text-anchor': 'center',
        'text-offset': [
          0.8,
          0.8
        ],
        'symbol-placement': 'line',
        visibility: 'visible'
      },
      paint: {
        'text-color': 'rgba(113, 103, 95, 1)',
        'text-halo-blur': 0.5,
        'text-halo-color': 'rgba(255, 255, 255, 1)',
        'text-halo-width': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          'in',
          'subclass',
          'gondola',
          'cable_car'
        ]
      ]
    },
    {
      id: 'road_ferry_label',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'transportation_name',
      minzoom: 12,
      layout: {
        'text-font': [
          'Roboto Italic',
          'Noto Sans Italic'
        ],
        'text-size': {
          base: 1,
          stops: [
            [
              13,
              11
            ],
            [
              15,
              12
            ]
          ]
        },
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          ' ',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        'text-anchor': 'center',
        'text-offset': [
          0.8,
          0.8
        ],
        'symbol-placement': 'line',
        visibility: 'visible'
      },
      paint: {
        'text-color': 'rgba(46, 126, 168, 1)',
        'text-halo-blur': 0.5,
        'text-halo-width': 1
      },
      filter: [
        'all',
        [
          '==',
          'subclass',
          'ferry'
        ]
      ]
    },
    {
      id: 'road_label',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'transportation_name',
      layout: {
        'text-font': [
          'Roboto Regular',
          'Noto Sans Regular'
        ],
        'text-size': {
          base: 1,
          stops: [
            [
              13,
              11
            ],
            [
              14,
              13
            ]
          ]
        },
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          ' ',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        'text-anchor': 'center',
        'text-offset': [
          0,
          0.15
        ],
        'symbol-placement': 'line',
        visibility: 'visible'
      },
      paint: {
        'text-color': '#765',
        'text-halo-blur': 0.5,
        'text-halo-width': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '!in',
          'subclass',
          'ferry',
          'gondola',
          'cable_car'
        ]
      ]
    },
    {
      id: 'highway-junction',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'transportation_name',
      minzoom: 15.5,
      layout: {
        'icon-size': 1,
        'text-font': [
          'Noto Sans Regular'
        ],
        'text-size': 10,
        'icon-image': 'circle_8',
        'text-field': 'Exit {ref}',
        visibility: 'visible',
        'text-anchor': 'bottom-left',
        'text-offset': [
          0.55,
          -0.4
        ],
        'text-justify': 'center',
        'icon-text-fit': 'none',
        'symbol-spacing': 200,
        'symbol-z-order': 'auto',
        'symbol-placement': 'point',
        'symbol-avoid-edges': true,
        'text-pitch-alignment': 'auto',
        'icon-rotation-alignment': 'viewport',
        'text-rotation-alignment': 'viewport'
      },
      paint: {
        'text-color': 'rgba(79, 77, 77, 1)',
        'icon-opacity': 1
      },
      filter: [
        'all',
        [
          '==',
          '$type',
          'Point'
        ],
        [
          '==',
          'subclass',
          'junction'
        ],
        [
          '>',
          'ref_length',
          0
        ]
      ]
    },
    {
      id: 'highway-shield',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'transportation_name',
      minzoom: 8,
      layout: {
        'icon-size': 1,
        'text-font': [
          'Noto Sans Regular'
        ],
        'text-size': 10,
        'icon-image': 'road_{ref_length}',
        'text-field': '{ref}',
        'symbol-spacing': 200,
        'symbol-placement': {
          base: 1,
          stops: [
            [
              10,
              'point'
            ],
            [
              11,
              'line'
            ]
          ]
        },
        'symbol-avoid-edges': true,
        'icon-rotation-alignment': 'viewport',
        'text-rotation-alignment': 'viewport',
        visibility: 'visible'
      },
      paint: {
        'text-color': 'rgba(37, 36, 36, 1)'
      },
      filter: [
        'all',
        [
          '<=',
          'ref_length',
          6
        ],
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          '!in',
          'network',
          'us-interstate',
          'us-highway',
          'us-state'
        ]
      ]
    },
    {
      id: 'highway-shield-us-interstate',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'transportation_name',
      minzoom: 7,
      layout: {
        'icon-size': 1,
        'text-font': [
          'Noto Sans Regular'
        ],
        'text-size': 9,
        'icon-image': '{network}_{ref_length}',
        'text-field': '{ref}',
        'symbol-spacing': 200,
        'symbol-placement': {
          base: 1,
          stops: [
            [
              7,
              'point'
            ],
            [
              7,
              'line'
            ],
            [
              8,
              'line'
            ]
          ]
        },
        'symbol-avoid-edges': true,
        'icon-rotation-alignment': 'viewport',
        'text-rotation-alignment': 'viewport',
        visibility: 'visible'
      },
      paint: {
        'text-color': 'rgba(255, 255, 255, 1)'
      },
      filter: [
        'all',
        [
          '<=',
          'ref_length',
          6
        ],
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          'in',
          'network',
          'us-interstate'
        ]
      ]
    },
    {
      id: 'highway-shield-us-other',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'transportation_name',
      minzoom: 9,
      layout: {
        'icon-size': 1,
        'text-font': [
          'Noto Sans Regular'
        ],
        'text-size': 9,
        'icon-image': '{network}_{ref_length}',
        'text-field': '{ref}',
        'symbol-spacing': 200,
        'symbol-placement': {
          base: 1,
          stops: [
            [
              10,
              'point'
            ],
            [
              11,
              'line'
            ]
          ]
        },
        'symbol-avoid-edges': true,
        'icon-rotation-alignment': 'viewport',
        'text-rotation-alignment': 'viewport',
        visibility: 'visible'
      },
      paint: {
        'text-color': 'rgba(37, 36, 36, 1)'
      },
      filter: [
        'all',
        [
          '<=',
          'ref_length',
          6
        ],
        [
          '==',
          '$type',
          'LineString'
        ],
        [
          'in',
          'network',
          'us-highway',
          'us-state'
        ]
      ]
    },
    {
      id: 'airport_label',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'aerodrome_label',
      minzoom: 8.5,
      layout: {
        'icon-size': 1,
        'text-font': [
          'Noto Sans Regular'
        ],
        'text-size': {
          stops: [
            [
              8,
              10
            ],
            [
              14,
              13
            ]
          ]
        },
        'icon-image': 'airport_11',
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'visible',
        'text-anchor': 'top',
        'text-offset': [
          0,
          0.6
        ],
        'text-padding': 2,
        'text-optional': true,
        'text-max-width': 9
      },
      paint: {
        'text-color': '#666',
        'text-halo-blur': 0.5,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1
      },
      filter: [
        'all',
        [
          'has',
          'iata'
        ]
      ]
    },
    {
      id: 'airport_gate',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'aeroway',
      minzoom: 16.5,
      layout: {
        'text-font': [
          'Roboto Medium',
          'Noto Sans Regular'
        ],
        'text-size': {
          stops: [
            [
              17,
              9
            ],
            [
              19,
              15
            ]
          ]
        },
        'text-field': '{ref}',
        visibility: 'visible'
      },
      paint: {
        'text-color': 'rgba(135, 135, 135, 1)',
        'text-halo-color': 'rgba(255, 255, 255, 1)',
        'text-halo-width': 1.5
      },
      filter: [
        'all',
        [
          '==',
          'class',
          'gate'
        ]
      ]
    },
    {
      id: 'place_park',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'park',
      minzoom: 12,
      layout: {
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': {
          base: 1.2,
          stops: [
            [
              12,
              10
            ],
            [
              15,
              14
            ]
          ]
        },
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'visible',
        'symbol-spacing': 1250,
        'text-max-width': 9,
        'text-transform': 'none',
        'symbol-avoid-edges': false,
        'text-letter-spacing': 0.1
      },
      paint: {
        'text-color': 'rgba(94, 141, 58, 1)',
        'text-halo-blur': 0.5,
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 1.2
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'rank',
          1
        ]
      ]
    },
    {
      id: 'place_other',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      minzoom: 8,
      layout: {
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': {
          base: 1.2,
          stops: [
            [
              12,
              10
            ],
            [
              15,
              14
            ]
          ]
        },
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'visible',
        'text-max-width': 9,
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.1
      },
      paint: {
        'text-color': 'rgba(66, 62, 62, 1)',
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 1.2
      },
      metadata: {},
      filter: [
        'all',
        [
          'in',
          'class',
          'hamlet',
          'island',
          'islet',
          'neighbourhood',
          'suburb'
        ]
      ]
    },
    {
      id: 'place_village',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      minzoom: 8,
      layout: {
        'text-font': [
          'Roboto Regular',
          'Noto Sans Regular'
        ],
        'text-size': {
          base: 1.2,
          stops: [
            [
              10,
              12
            ],
            [
              15,
              22
            ]
          ]
        },
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        'text-max-width': 8,
        visibility: 'visible'
      },
      paint: {
        'text-color': '#333',
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 1.2
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'village'
        ]
      ]
    },
    {
      id: 'place_town',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      minzoom: 6,
      layout: {
        'text-font': [
          'Roboto Regular',
          'Noto Sans Regular'
        ],
        'text-size': {
          base: 1.2,
          stops: [
            [
              7,
              12
            ],
            [
              11,
              16
            ]
          ]
        },
        'icon-image': {
          base: 1,
          stops: [
            [
              0,
              'circle-stroked_16'
            ],
            [
              10,
              ''
            ]
          ]
        },
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        'text-anchor': 'bottom',
        'text-offset': [
          0,
          0
        ],
        'text-max-width': 8,
        visibility: 'visible'
      },
      paint: {
        'text-color': '#333',
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 1.2
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'town'
        ]
      ]
    },
    {
      id: 'place_city',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      minzoom: 5,
      layout: {
        'text-font': [
          'Roboto Medium',
          'Noto Sans Regular'
        ],
        'text-size': {
          base: 1.2,
          stops: [
            [
              7,
              14
            ],
            [
              11,
              24
            ]
          ]
        },
        'icon-image': {
          base: 1,
          stops: [
            [
              0,
              'circle-stroked_16'
            ],
            [
              10,
              ''
            ]
          ]
        },
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        'text-anchor': 'bottom',
        'text-offset': [
          0,
          0
        ],
        'icon-optional': false,
        'text-max-width': 8,
        'icon-allow-overlap': true,
        visibility: 'visible'
      },
      paint: {
        'text-color': '#333',
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 1.2
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'city'
        ]
      ]
    },
    {
      id: 'place_region',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      minzoom: 5,
      maxzoom: 7,
      layout: {
        'text-font': [
          'Roboto Medium',
          'Noto Sans Regular'
        ],
        'text-size': {
          stops: [
            [
              3,
              9
            ],
            [
              5,
              10
            ],
            [
              6,
              11
            ]
          ]
        },
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'visible',
        'text-padding': 2,
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.1
      },
      paint: {
        'text-color': 'rgba(118, 116, 108, 1)',
        'text-halo-color': 'rgba(255,255,255,0.7)',
        'text-halo-width': 0.8
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'state'
        ],
        [
          'in',
          'rank',
          3,
          4,
          5
        ]
      ]
    },
    {
      id: 'place_state',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      minzoom: 3,
      maxzoom: 6,
      layout: {
        'text-font': [
          'Roboto Medium',
          'Noto Sans Regular'
        ],
        'text-size': {
          stops: [
            [
              3,
              9
            ],
            [
              5,
              11
            ],
            [
              6,
              12
            ]
          ]
        },
        'text-field': [
          'concat',
          [
            'get',
            'name:latin'
          ],
          '\n',
          [
            'get',
            'name:nonlatin'
          ]
        ],
        visibility: 'visible',
        'text-padding': 2,
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.1
      },
      paint: {
        'text-color': 'rgba(118, 116, 108, 1)',
        'text-halo-color': 'rgba(255,255,255,0.7)',
        'text-halo-width': 0.8
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'state'
        ],
        [
          'in',
          'rank',
          1,
          2
        ]
      ]
    },
    {
      id: 'country_other',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      layout: {
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': {
          stops: [
            [
              3,
              9
            ],
            [
              7,
              15
            ]
          ]
        },
        'text-field': '{name:latin}',
        'text-max-width': 6.25,
        'text-transform': 'none',
        visibility: 'visible'
      },
      paint: {
        'text-color': '#334',
        'text-halo-blur': 1,
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 0.8
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'country'
        ],
        [
          '!has',
          'iso_a2'
        ]
      ]
    },
    {
      id: 'country_3',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      layout: {
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': {
          stops: [
            [
              3,
              11
            ],
            [
              7,
              17
            ]
          ]
        },
        'text-field': '{name:latin}',
        'text-max-width': 6.25,
        'text-transform': 'none',
        visibility: 'visible'
      },
      paint: {
        'text-color': '#334',
        'text-halo-blur': 1,
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 0.8
      },
      metadata: {},
      filter: [
        'all',
        [
          '>=',
          'rank',
          3
        ],
        [
          '==',
          'class',
          'country'
        ],
        [
          'has',
          'iso_a2'
        ]
      ]
    },
    {
      id: 'country_2',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      layout: {
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': {
          stops: [
            [
              2,
              11
            ],
            [
              5,
              17
            ]
          ]
        },
        'text-field': '{name:latin}',
        'text-max-width': 6.25,
        'text-transform': 'none',
        visibility: 'visible'
      },
      paint: {
        'text-color': '#334',
        'text-halo-blur': 1,
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 0.8
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'rank',
          2
        ],
        [
          '==',
          'class',
          'country'
        ],
        [
          'has',
          'iso_a2'
        ]
      ]
    },
    {
      id: 'country_1',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      layout: {
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': {
          stops: [
            [
              1,
              11
            ],
            [
              4,
              17
            ],
            [
              6,
              19
            ]
          ]
        },
        'text-field': '{name:latin}',
        'text-max-width': 6.25,
        'text-transform': 'none',
        visibility: 'visible'
      },
      paint: {
        'text-color': '#334',
        'text-halo-blur': 1,
        'text-halo-color': 'rgba(255,255,255,0.8)',
        'text-halo-width': 0.8
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'rank',
          1
        ],
        [
          '==',
          'class',
          'country'
        ],
        [
          'has',
          'iso_a2'
        ]
      ]
    },
    {
      id: 'continent',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'place',
      maxzoom: 1,
      layout: {
        'text-font': [
          'Roboto Condensed Italic',
          'Noto Sans Italic'
        ],
        'text-size': 13,
        'text-field': '{name:latin}',
        'text-justify': 'center',
        'text-transform': 'uppercase',
        visibility: 'visible'
      },
      paint: {
        'text-color': '#633',
        'text-halo-color': 'rgba(255,255,255,0.7)',
        'text-halo-width': 1
      },
      metadata: {},
      filter: [
        'all',
        [
          '==',
          'class',
          'continent'
        ]
      ]
    },
    {
      id: 'housenumber',
      type: 'symbol',
      source: 'openmaptiles',
      'source-layer': 'housenumber',
      minzoom: 17.5,
      layout: {
        'text-font': [
          'Roboto Medium',
          'Noto Sans Regular'
        ],
        'text-size': 10,
        'text-field': '{housenumber}',
        visibility: 'visible'
      },
      paint: {
        'text-color': 'rgba(119, 102, 85, 0.69)'
      }
    }
  ],
  metadata: {
    'maptiler:copyright': 'This style was generated on MapTiler Cloud. Usage outside of MapTiler Cloud or MapTiler Server requires valid MapTiler Data package: https://www.maptiler.com/data/ -- please contact us.'
  },
  glyphs: 'https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=qw0NmMu0bhRS7dDtV7ne',
  sprite: 'https://api.maptiler.com/maps/cb229beb-70bc-49e1-afb6-3f1d8645f83f/sprite',
  bearing: 0,
  pitch: 0,
  center: [
    -48.608471013448025,
    -27.583360250695335
  ],
  zoom: 15.671782128472762
}

const me = bla.layers.filter(l => l.layout.visibility === 'visible' && l.source === 'openmaptiles')
console.log(JSON.stringify(me))
