=begin
#OpenAPI Petstore

#This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

OpenAPI spec version: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 3.3.4-SNAPSHOT

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Petstore::AdditionalPropertiesClass
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'AdditionalPropertiesClass' do
  before do
    # run before each test
    @instance = Petstore::AdditionalPropertiesClass.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of AdditionalPropertiesClass' do
    it 'should create an instance of AdditionalPropertiesClass' do
      expect(@instance).to be_instance_of(Petstore::AdditionalPropertiesClass)
    end
  end
  describe 'test attribute "map_property"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "map_of_map_property"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
