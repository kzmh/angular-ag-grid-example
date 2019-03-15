export class Item {
  janCd: string = null;
  name: string = null;
  makerName: string = null;
  brandName: string = null;
  width: number = null;
  height: number = null;
  depth: number = null;

  constructor(janCd: string, name: string, makerName: string, brandName: string, width: number, height: number, depth: number) {
    this.janCd = janCd;
    this.name = name;
    this.makerName = makerName;
    this.brandName = brandName;
    this.width = width;
    this.height = height;
    this.depth = depth;
  }
}
