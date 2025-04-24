  # To learn more about how to use Nix to configure your environment
  # see: https://firebase.google.com/docs/studio/customize-workspace
  { pkgs, ... }: {
    # Which nixpkgs channel to use.
    channel = "stable-24.05"; # or "unstable"
    # Use https://search.nixos.org/packages to find packages
    packages = [
      pkgs.nodejs
      pkgs.nodePackages.vite
      pkgs.nodePackages.express
    ];

    nodePackages = [
      pkgs.nodePackages.eslint
      pkgs.nodePackages.postcss
      pkgs.nodePackages.postcss-cli
      pkgs.nodePackages.postcss-modules
      pkgs.nodePackages.autoprefixer
      pkgs.nodePackages.tailwindcss
    ];

    idx.previews.previews.web = {
      command = ["npm" "run" "dev"];
      manager = "web";
      env = { PORT = "$PORT"; };
    };

    idx.workspace.onCreate = {
      npm-install = "npm install";
    };
  }
