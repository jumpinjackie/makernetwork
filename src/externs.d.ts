declare module "react-bootstrap" {
    import * as React from "react";
    interface NavbarFormProps extends React.HTMLAttributes {
    }
    type NavbarForm = React.ClassicComponent<NavbarHeaderProps, {}>;
    var NavbarForm: React.ClassicComponentClass<NavbarHeaderProps>;
    
    interface NavbarClass extends React.ClassicComponentClass<NavbarProps> {
        Form: typeof NavbarForm;
    }

    class FormControl extends React.Component<any, any> { }

    class ControlLabel extends React.Component<any, any> { }
}

declare module "react-leaflet" {
    import * as React from "react";
    
    type LatLng = number[] | {lat: number, lng: number} | {lat: number, lon: number};
    type LatLngList = LatLng[];
    type Bounds = LatLngList;
    type ControlPosition = 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    
    interface IMapProps {
        animate?: boolean;
        bounds?: Bounds;
        boundsOptions?: any;
        center?: LatLng;
        className?: string;
        maxBounds?: string;
        style?: any;
        zoom?: number;
        id?: string;
    }
    
    class Map extends React.Component<IMapProps, any> {
        
    }
    
    interface IMarkerProps {
        position: LatLng;
        opacity?: number;
    }
    
    class Marker extends React.Component<IMarkerProps, any> {
        
    }
    
    interface IPopupProps {
        position?: LatLng;
    }
    
    class Popup extends React.Component<IPopupProps, any> {
        
    }
    
    interface ITileLayerProps {
        url: string;
        opacity?: number;
        zIndex?: number;
        attribution?: string;
    }
    
    class TileLayer extends React.Component<ITileLayerProps, any> {
        
    }
}