import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Download, 
  Users, 
  Building, 
  MapPin, 
  Map, 
  Thermometer,
  Radar,
  Camera,
  Cloud,
  Sun,
  CloudRain,
  CloudSnow,
  Eye,
  Plane,
  Navigation,
  Fuel,
  Clock,
  Zap
} from 'lucide-react';

const Dashboard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState([1]);
  const [layers, setLayers] = useState({
    buildings: true,
    victims: true,
    robots: true,
    terrain: true,
    heatmap: true
  });
  const [sensors, setSensors] = useState({
    thermal: false,
    lidar: false,
    camera: true
  });

  const toggleLayer = (layer: keyof typeof layers) => {
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  const toggleSensor = (sensor: keyof typeof sensors) => {
    setSensors(prev => ({ ...prev, [sensor]: !prev[sensor] }));
  };

  return (
    <div className="h-screen bg-background font-inter flex flex-col">
      {/* Top Bar */}
      <header className="h-16 border-b border-panel-border bg-panel flex items-center justify-between px-6">
        <h1 className="text-2xl font-instrument font-semibold text-foreground">
          Simulate SAR
        </h1>
        <nav className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Dashboard</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Scenarios</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Reports</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Export</a>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">JS</AvatarFallback>
          </Avatar>
        </nav>
      </header>

      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-panel border-r border-panel-border">
          <div className="p-4 space-y-6">
            {/* Scenario Selector */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Scenario</label>
              <Select defaultValue="urban-collapse">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urban-collapse">Urban Building Collapse</SelectItem>
                  <SelectItem value="wilderness">Wilderness Search</SelectItem>
                  <SelectItem value="flood-zone">Flood Zone Rescue</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Layer Toggles */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Layers</h3>
              <div className="space-y-3">
                {[
                  { key: 'buildings', label: 'Buildings', icon: Building },
                  { key: 'victims', label: 'Victims', icon: Users },
                  { key: 'robots', label: 'Robots', icon: Plane },
                  { key: 'terrain', label: 'Terrain', icon: Map },
                  { key: 'heatmap', label: 'Heatmap', icon: Thermometer }
                ].map(({ key, label, icon: Icon }) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{label}</span>
                    </div>
                    <Switch
                      checked={layers[key as keyof typeof layers]}
                      onCheckedChange={() => toggleLayer(key as keyof typeof layers)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Scenario:</span>
                  <span className="text-foreground">Urban Collapse</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="text-foreground">14:32:15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Speed:</span>
                  <span className="text-foreground">{speed[0]}×</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Main Viewport */}
          <div className="flex-1 relative bg-gray-100 overflow-hidden">
            {/* 3D Scene Preview */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
              
              {/* Buildings */}
              <div className="absolute bottom-20 left-1/4 w-16 h-24 bg-gray-600 shadow-xl">
                <div className="w-full h-full bg-gradient-to-t from-gray-700 to-gray-500 relative">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-200 opacity-60"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-200 opacity-40"></div>
                  <div className="absolute top-6 left-2 w-2 h-2 bg-yellow-200 opacity-70"></div>
                  <div className="absolute top-10 right-2 w-2 h-2 bg-yellow-200 opacity-30"></div>
                </div>
              </div>
              <div className="absolute bottom-20 left-1/3 w-12 h-32 bg-gray-700 shadow-xl">
                <div className="w-full h-full bg-gradient-to-t from-gray-800 to-gray-600 relative">
                  <div className="absolute top-3 left-1 w-1.5 h-1.5 bg-yellow-200 opacity-50"></div>
                  <div className="absolute top-3 right-1 w-1.5 h-1.5 bg-yellow-200 opacity-60"></div>
                  <div className="absolute top-8 left-1 w-1.5 h-1.5 bg-yellow-200 opacity-40"></div>
                  <div className="absolute top-8 right-1 w-1.5 h-1.5 bg-yellow-200 opacity-70"></div>
                  <div className="absolute top-13 left-1 w-1.5 h-1.5 bg-yellow-200 opacity-30"></div>
                </div>
              </div>
              <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-gray-500 shadow-xl transform -rotate-6">
                <div className="w-full h-full bg-gradient-to-t from-gray-600 to-gray-400 relative">
                  <div className="absolute top-2 left-3 w-2 h-2 bg-yellow-200 opacity-60"></div>
                  <div className="absolute top-2 right-3 w-2 h-2 bg-yellow-200 opacity-40"></div>
                  <div className="absolute top-6 left-3 w-2 h-2 bg-yellow-200 opacity-50"></div>
                  <div className="absolute top-6 right-3 w-2 h-2 bg-yellow-200 opacity-70"></div>
                  <div className="absolute top-10 left-6 w-2 h-2 bg-yellow-200 opacity-30"></div>
                </div>
              </div>
              <div className="absolute bottom-20 right-1/3 w-14 h-28 bg-gray-600 shadow-xl transform rotate-3">
                <div className="w-full h-full bg-gradient-to-t from-gray-700 to-gray-500 relative">
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-yellow-200 opacity-50"></div>
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-yellow-200 opacity-60"></div>
                  <div className="absolute top-6 left-2 w-1.5 h-1.5 bg-yellow-200 opacity-40"></div>
                  <div className="absolute top-6 right-2 w-1.5 h-1.5 bg-yellow-200 opacity-70"></div>
                  <div className="absolute top-10 left-2 w-1.5 h-1.5 bg-yellow-200 opacity-30"></div>
                  <div className="absolute top-14 right-2 w-1.5 h-1.5 bg-yellow-200 opacity-40"></div>
                </div>
              </div>
              
              {/* Terrain/Rubble areas */}
              <div className="absolute bottom-0 left-1/4 w-32 h-16 bg-amber-200 rounded-full opacity-70 transform rotate-12"></div>
              <div className="absolute bottom-5 right-1/4 w-24 h-12 bg-amber-300 rounded-full opacity-60"></div>
              
              {/* Robot/Drone indicators */}
              <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-simulation-coverage rounded-full animate-pulse shadow-lg">
                <div className="absolute -top-1 -left-1 w-5 h-5 border-2 border-simulation-coverage rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              
              {/* Heatmap overlay zones */}
              <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-simulation-survivor-high rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-simulation-survivor-medium rounded-full opacity-40"></div>
              <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-simulation-survivor-low rounded-full opacity-35"></div>
              
              {/* Search grid overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-gray-400"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Heatmap Overlay Indicators */}
            <div className="absolute top-4 left-4 space-y-2">
              <div className="bg-white/90 backdrop-blur rounded-lg p-3">
                <div className="text-xs font-medium mb-2">Survivor Density</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-simulation-survivor-high"></div>
                    <span className="text-xs">High</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-simulation-survivor-medium"></div>
                    <span className="text-xs">Medium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-simulation-survivor-low"></div>
                    <span className="text-xs">Low</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/90 backdrop-blur rounded-lg p-2 flex gap-1">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Navigation className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Panel */}
          <div className="h-48 bg-panel border-t border-panel-border">
            <div className="grid grid-cols-3 h-full">
              {/* Victim Detection Feed */}
              <Card className="rounded-none border-0 border-r border-panel-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Victim Detection Feed</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { confidence: 94, coords: '127.4, 34.8', time: '14:31:42' },
                    { confidence: 87, coords: '127.3, 34.9', time: '14:30:15' },
                    { confidence: 76, coords: '127.5, 34.7', time: '14:28:33' }
                  ].map((detection, i) => (
                    <div key={i} className="flex justify-between text-xs">
                      <span className="text-simulation-survivor-high font-medium">{detection.confidence}%</span>
                      <span className="text-muted-foreground">{detection.coords}</span>
                      <span className="text-foreground">{detection.time}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Robot Deployment */}
              <Card className="rounded-none border-0 border-r border-panel-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Robot Deployment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Plane className="h-3 w-3 mr-1" />
                      Deploy Drone
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Navigation className="h-3 w-3 mr-1" />
                      Ground Unit
                    </Button>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Drone-01:</span>
                      <span className="text-simulation-coverage">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ground-02:</span>
                      <span className="text-simulation-survivor-medium">Refuel</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Event Log */}
              <Card className="rounded-none border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Event Log</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  {[
                    { time: '14:31:42', event: 'Victim detected at sector B3' },
                    { time: '14:30:15', event: 'Drone-01 battery at 45%' },
                    { time: '14:28:33', event: 'Ground unit deployed' }
                  ].map((log, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-muted-foreground mr-2">{log.time}</span>
                      <span className="text-foreground">{log.event}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-64 bg-panel border-l border-panel-border">
          <div className="p-4 space-y-6">
            {/* Simulation Controls */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Simulation Controls</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button 
                    variant={isPlaying ? "default" : "outline"} 
                    size="sm" 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex-1"
                  >
                    {isPlaying ? <Pause className="h-3 w-3 mr-1" /> : <Play className="h-3 w-3 mr-1" />}
                    {isPlaying ? 'Pause' : 'Play'}
                  </Button>
                  <Button variant="outline" size="sm">
                    <RotateCcw className="h-3 w-3" />
                  </Button>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Speed: {speed[0]}×</label>
                  <Slider
                    value={speed}
                    onValueChange={setSpeed}
                    max={5}
                    min={0.5}
                    step={0.5}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Environment Settings */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Environment</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Time of Day</label>
                  <Select defaultValue="afternoon">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dawn">Dawn</SelectItem>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="dusk">Dusk</SelectItem>
                      <SelectItem value="night">Night</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Weather</label>
                  <Select defaultValue="clear">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clear">Clear</SelectItem>
                      <SelectItem value="rain">Rain</SelectItem>
                      <SelectItem value="fog">Fog</SelectItem>
                      <SelectItem value="snow">Snow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Visibility</label>
                  <Slider defaultValue={[85]} max={100} min={10} className="w-full" />
                </div>
              </div>
            </div>

            {/* Sensor Toggles */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Sensors</h3>
              <div className="space-y-3">
                {[
                  { key: 'thermal', label: 'Thermal View', icon: Thermometer },
                  { key: 'lidar', label: 'LiDAR', icon: Radar },
                  { key: 'camera', label: 'UAV Camera', icon: Camera }
                ].map(({ key, label, icon: Icon }) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{label}</span>
                    </div>
                    <Switch
                      checked={sensors[key as keyof typeof sensors]}
                      onCheckedChange={() => toggleSensor(key as keyof typeof sensors)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;