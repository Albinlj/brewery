export async function getCasks() {
  const res = await fetch('https://formulae.brew.sh/api/cask.json');
  const data = await res.json();
  return data as Root;
}

type NewType = {
  url?: string;
  sha256?: string;
  artifacts?: Array<{
    binary?: Array<unknown>;
    app?: Array<string>;
    uninstall?: Array<{
      pkgutil: unknown;
      launchctl: unknown;
      quit?: string;
      delete: unknown;
      signal?: Array<string>;
      script?: {
        executable: string;
        args?: Array<string>;
        sudo: string;
      };
    }>;
    pkg?: Array<string>;
    zap?: Array<{
      trash: unknown;
      rmdir?: Array<string>;
    }>;
    installer?: Array<{
      script: {
        executable: string;
        args: Array<string>;
        sudo?: string;
      };
    }>;
    postflight: unknown;
    uninstall_preflight: unknown;
  }>;
  version?: string;
  depends_on?: {
    formula?: Array<string>;
    macos?: {
      '>=': Array<string>;
    };
  };
};

export type Root = Array<{
  token: string;
  full_token: string;
  tap: string;
  name: Array<string>;
  desc?: string;
  homepage: string;
  url: string;
  appcast?: string;
  version: string;
  versions: {
    el_capitan?: string;
    mojave?: string;
    high_sierra?: string;
    sierra?: string;
    catalina?: string;
    ventura?: string;
    monterey?: string;
  };
  installed?: string;
  outdated: boolean;
  sha256: string;
  artifacts: Array<{
    app?: Array<unknown>;
    zap?: Array<{
      trash: unknown;
      rmdir: unknown;
      kext?: Array<string>;
      launchctl: unknown;
      delete: unknown;
      pkgutil: unknown;
      script?: {
        executable: string;
        args: Array<string>;
        sudo?: string;
      };
      login_item?: string;
    }>;
    uninstall?: Array<{
      quit: unknown;
      pkgutil: unknown;
      signal: unknown;
      launchctl: unknown;
      delete: unknown;
      trash: unknown;
      script: unknown;
      login_item: unknown;
      rmdir: unknown;
      kext: unknown;
      early_script?: {
        executable: string;
        args?: Array<string>;
        must_succeed?: string;
        sudo?: string;
        print_stderr?: string;
      };
    }>;
    pkg?: Array<unknown>;
    binary?: Array<unknown>;
    installer?: Array<{
      script?: {
        executable: string;
        args?: Array<string>;
        sudo?: string;
        print_stderr?: string;
        input?: Array<string>;
      };
      manual?: string;
    }>;
    uninstall_preflight: unknown;
    uninstall_postflight: unknown;
    screen_saver?: Array<string>;
    manpage?: Array<string>;
    suite?: Array<unknown>;
    postflight: unknown;
    artifact?: [
      string,
      {
        target: string;
      }
    ];
    preflight: unknown;
    prefpane?: Array<string>;
    qlplugin?: Array<string>;
    colorpicker?: Array<string>;
    dictionary?: Array<string>;
    mdimporter?: Array<unknown>;
    stage_only?: Array<string>;
    input_method?: Array<string>;
    audio_unit_plugin?: Array<string>;
    service?: Array<string>;
    vst_plugin?: Array<string>;
    vst3_plugin?: Array<string>;
    internet_plugin?: Array<string>;
  }>;
  caveats?: string;
  depends_on: {
    macos?: {
      '>='?: Array<string>;
      '<='?: Array<string>;
      '=='?: Array<string>;
    };
    cask?: Array<string>;
    arch?: Array<{
      type: string;
      bits: number;
    }>;
    formula?: Array<string>;
  };
  conflicts_with?: {
    cask?: Array<string>;
    formula?: Array<string>;
  };
  container?: string;
  auto_updates?: boolean;
  variations: {
    arm64_ventura?: {
      url?: string;
      sha256?: string;
      artifacts?: Array<{
        binary?: Array<unknown>;
        app?: Array<string>;
        uninstall?: Array<{
          pkgutil: unknown;
          launchctl: unknown;
          quit?: string;
          delete: unknown;
          signal?: Array<string>;
          script?: {
            executable: string;
            args?: Array<string>;
            sudo: string;
          };
        }>;
        pkg?: Array<string>;
        zap?: Array<{
          trash: unknown;
          rmdir?: Array<string>;
        }>;
        installer?: Array<{
          script: {
            executable: string;
            args: Array<string>;
            sudo?: string;
          };
        }>;
        postflight: unknown;
        uninstall_preflight: unknown;
      }>;
      version?: string;
      depends_on?: {
        formula?: Array<string>;
        macos?: {
          '>=': Array<string>;
        };
      };
    };
    arm64_monterey?: NewType;
    arm64_big_sur?: {
      url?: string;
      sha256?: string;
      artifacts?: Array<{
        binary?: Array<unknown>;
        app?: Array<string>;
        uninstall?: Array<{
          pkgutil: unknown;
          launchctl: unknown;
          quit?: string;
          delete: unknown;
          signal?: Array<string>;
          script?: {
            executable: string;
            args?: Array<string>;
            sudo: string;
          };
        }>;
        pkg?: Array<string>;
        zap?: Array<{
          trash: unknown;
          rmdir?: Array<string>;
        }>;
        installer?: Array<{
          script: {
            executable: string;
            args: Array<string>;
            sudo?: string;
          };
        }>;
        postflight: unknown;
        uninstall_preflight: unknown;
      }>;
      version?: string;
      depends_on?: {
        formula?: Array<string>;
        macos?: {
          '>=': Array<string>;
        };
      };
    };
    high_sierra?: {
      url: string;
      version?: string;
      sha256?: string;
      artifacts?: Array<{
        uninstall_preflight: unknown;
        uninstall?: Array<{
          pkgutil: string;
          launchctl: Array<string>;
        }>;
        pkg?: Array<string>;
        postflight: unknown;
      }>;
    };
    sierra?: {
      url: string;
      version?: string;
      sha256?: string;
      artifacts?: Array<{
        uninstall?: Array<{
          pkgutil: unknown;
          launchctl?: Array<string>;
          delete?: Array<string>;
        }>;
        pkg?: Array<string>;
        zap?: Array<{
          trash: Array<string>;
        }>;
        uninstall_preflight: unknown;
        postflight: unknown;
      }>;
    };
    el_capitan?: {
      url: string;
      version?: string;
      sha256?: string;
      artifacts?: Array<{
        uninstall?: Array<{
          pkgutil: unknown;
          launchctl?: Array<string>;
          delete?: Array<string>;
        }>;
        pkg?: Array<string>;
        zap?: Array<{
          trash: Array<string>;
        }>;
        uninstall_preflight: unknown;
        postflight: unknown;
      }>;
    };
    mojave?: {
      url: string;
      version?: string;
      sha256?: string;
      artifacts?: Array<{
        uninstall_preflight: unknown;
        uninstall?: Array<{
          pkgutil: string;
          launchctl: Array<string>;
        }>;
        pkg?: Array<string>;
        postflight: unknown;
      }>;
    };
    catalina?: {
      url: string;
      version?: string;
      sha256?: string;
      artifacts?: Array<{
        uninstall_preflight: unknown;
        uninstall?: Array<{
          pkgutil: string;
          launchctl: Array<string>;
        }>;
        pkg?: Array<string>;
        postflight: unknown;
      }>;
    };
    ventura?: {
      url: string;
      sha256: string;
    };
    monterey?: {
      url: string;
      sha256: string;
    };
  };
}>;
