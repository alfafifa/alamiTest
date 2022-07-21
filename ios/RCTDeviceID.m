//
//  RCTDeviceID.m
//  testAlami
//
//  Created by Afifuddin Al Rasyid on 20/07/22.
//

#import "RCTDeviceID.h"

@implementation RCTDeviceID

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(getPhoneID:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
  NSString *uniqueIdentifier = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
//  NSString *deviceName = [[UIDevice currentDevice] name];
  resolve(uniqueIdentifier);
}

@end
