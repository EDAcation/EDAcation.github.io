let
  unstable =
    import
      (fetchTarball "https://github.com/NixOS/nixpkgs/tarball/bfe27cf81c881138fcaa0329b3ad51832558dcab")
      { };
in
{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  packages = with pkgs; [
    unstable.hugo
    nodejs_20
  ];
}
