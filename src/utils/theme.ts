export const theme: DefaultTheme = {
  spacing: {
    xs: 5,
    sm: 10,
    xl: 20,
  },
  colors: {
    gray: {
      light: 'rgb(238, 238, 238)',
      normal: 'rgb(222, 220, 220)',
      normal2: 'rgba(107,114,128,1)',
      dark: 'rgb(48,48,48)',
    },
    green: {
      normal: 'rgb(85, 150, 0)',
    },
    primary: {
      normal: 'rgba(167,139,250,1)',
      dark: 'rgba(124,58,237,1)',
    },
    blue: {
      normal: 'rgb(31,41,55)',
      light: 'rgb(75,85,99)',
      //normal: 'rgba(59,130,246)',
    },
    taskIcon: {
      normal: 'rgba(110, 231, 183,1)',
      light: 'rgba(110, 231, 183,.5)',
    },
    notesIcon: {
      normal: 'rgba(249,168,212, 1)',
      light: 'rgba(249,168,212,.5)',
    },
    boredIcon: {
      normal: 'rgba(59,130,246, 1)',
      light: 'rgba(59,130,246, .5)',
    },
    orange: {
      normal: 'rgba(252,165,165,1)',
      light: 'rgba(252,165,165,.5)',
    },
  },
};
//167,139,250
//59,130,246 prev
export interface DefaultTheme {
  spacing: {
    xs: number;
    sm: number;
    xl: number;
  };
  colors: {
    gray: {
      light: string;
      normal: string;
      normal2: string;
      dark: string;
    };
    green: {
      normal: string;
    };
    primary: {
      normal: string;
      dark: string;
    };
    blue: {
      normal: string;
      light: string;
    };
    taskIcon: {
      normal: string;
      light: string;
    };
    notesIcon: {
      normal: string;
      light: string;
    };
    boredIcon: {
      normal: string;
      light: string;
    };
    orange: {
      normal: string;
      light: string;
    };
  };
}
